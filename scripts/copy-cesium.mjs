import { cpSync, rmSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const src = join(root, "node_modules/cesium/Build/Cesium");
const dest = join(root, "public/cesium");

if (!existsSync(src)) {
  throw new Error('Cesium build not found. Run "npm install cesium" first.');
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(join(root, "public"), { recursive: true });
cpSync(src, dest, { recursive: true });
console.log("Cesium assets copied to public/cesium");
