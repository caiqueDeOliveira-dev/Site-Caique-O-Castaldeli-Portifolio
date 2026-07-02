import { execSync } from "child_process";
import { existsSync, cpSync, rmSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isVercel = process.env.VERCEL === "1";

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

if (isVercel) {
  const serverDir = join(__dirname, "server");
  const serverDist = join(serverDir, "dist");
  const apiServerDist = join(__dirname, "api", "server-dist");

  run("npm install --include=dev", { cwd: serverDir });
  run("npx prisma generate", { cwd: serverDir });
  run("npx tsc", { cwd: serverDir });

  console.log("[BUILD] Copiando build do servidor para api/...");
  if (existsSync(apiServerDist)) rmSync(apiServerDist, { recursive: true });
  mkdirSync(apiServerDist, { recursive: true });
  cpSync(serverDist, apiServerDist, { recursive: true });

  console.log("[BUILD] Copiando dependencias do servidor para raiz...");
  const serverNodeModules = join(serverDir, "node_modules");
  const rootNodeModules = join(__dirname, "node_modules");
  if (!existsSync(rootNodeModules)) mkdirSync(rootNodeModules, { recursive: true });

  const pkgs = readdirSync(serverNodeModules, { withFileTypes: true });
  for (const pkg of pkgs) {
    if (pkg.name.startsWith(".") || pkg.name === ".prisma") continue;
    const src = join(serverNodeModules, pkg.name);
    const dst = join(rootNodeModules, pkg.name);
    if (!existsSync(dst)) {
      cpSync(src, dst, { recursive: true });
    }
  }

  const prismaClientSrc = join(serverNodeModules, ".prisma");
  const prismaClientDst = join(rootNodeModules, ".prisma");
  if (existsSync(prismaClientSrc)) {
    if (existsSync(prismaClientDst)) rmSync(prismaClientDst, { recursive: true });
    cpSync(prismaClientSrc, prismaClientDst, { recursive: true });
  }

  run("npm install", { cwd: __dirname });
  run("npx vite build", { cwd: __dirname });

  console.log("[BUILD] Build completo!");
} else {
  run("npx vite build", { cwd: __dirname });
}
