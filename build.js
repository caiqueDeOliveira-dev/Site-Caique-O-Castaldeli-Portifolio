import { execSync } from "child_process";
import { existsSync, cpSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

console.log("[BUILD] Gerando Prisma Client...");
run("npx prisma generate", { cwd: join(__dirname, "server") });

const serverModules = join(__dirname, "server", "node_modules");
const rootModules = join(__dirname, "node_modules");

// Copy generated Prisma client to root
const prismaSrc = join(serverModules, ".prisma");
const prismaDst = join(rootModules, ".prisma");
if (existsSync(prismaSrc)) {
  if (existsSync(prismaDst)) rmSync(prismaDst, { recursive: true });
  cpSync(prismaSrc, prismaDst, { recursive: true });
  console.log("[BUILD] .prisma copiado para node_modules root");
}

console.log("[BUILD] Buildando frontend...");
run("npx vite build", { cwd: __dirname });

console.log("[BUILD] Build completo!");
