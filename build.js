import { execSync } from "child_process";
import { existsSync, cpSync, rmSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isVercel = process.env.VERCEL === "1";

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit", ...opts });
  } catch (e) {
    console.error(`[BUILD ERROR] Comando falhou: ${cmd}`);
    throw e;
  }
}

if (isVercel) {
  const serverDir = join(__dirname, "server");
  const serverDist = join(serverDir, "dist");
  const apiServerDist = join(__dirname, "api", "server-dist");

  // 1. First build frontend (deps already installed by Vercel)
  run("npx vite build", { cwd: __dirname });

  // 2. Then build server and prepare API function
  run("npm install --include=dev", { cwd: serverDir });
  run("npx prisma generate", { cwd: serverDir });
  run("npx tsc", { cwd: serverDir });

  // 3. Copy compiled server to api/
  console.log("[BUILD] Copiando build do servidor para api/...");
  if (existsSync(apiServerDist)) rmSync(apiServerDist, { recursive: true });
  mkdirSync(apiServerDist, { recursive: true });
  cpSync(serverDist, apiServerDist, { recursive: true });

  // 4. Copy server packages needed by the API function
  console.log("[BUILD] Copiando dependencias do servidor...");
  const rootModules = join(__dirname, "node_modules");
  const serverModules = join(serverDir, "node_modules");
  const pkgs = readdirSync(serverModules, { withFileTypes: true });
  for (const pkg of pkgs) {
    if (pkg.name.startsWith(".")) continue;
    const src = join(serverModules, pkg.name);
    const dst = join(rootModules, pkg.name);
    if (!existsSync(dst)) {
      cpSync(src, dst, { recursive: true });
    }
  }
  // Copy .prisma generated client
  const prismaSrc = join(serverModules, ".prisma");
  const prismaDst = join(rootModules, ".prisma");
  if (existsSync(prismaSrc)) {
    if (existsSync(prismaDst)) rmSync(prismaDst, { recursive: true });
    cpSync(prismaSrc, prismaDst, { recursive: true });
  }

  console.log("[BUILD] Build completo!");
} else {
  run("npx vite build", { cwd: __dirname });
}
