const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

for (const name of fs.readdirSync(srcDir)) {
  if (name.endsWith(".js")) {
    fs.copyFileSync(path.join(srcDir, name), path.join(distDir, name));
  }
}

fs.writeFileSync(
  path.join(distDir, "hello"),
  "#!/usr/bin/env sh\nnode \"$(dirname \"$0\")/hello.js\"\n",
  { mode: 0o755 }
);

fs.writeFileSync(
  path.join(distDir, "hello.cmd"),
  "@echo off\r\nnode \"%~dp0hello.js\" %*\r\n"
);
