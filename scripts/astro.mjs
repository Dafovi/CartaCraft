import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

// Disables telemetry for this project without writing global user configuration.
const packageRoot = new URL('../node_modules/astro/', import.meta.url);
const metadata = JSON.parse(await readFile(new URL('package.json', packageRoot), 'utf8'));
const cli = fileURLToPath(new URL(metadata.bin.astro, packageRoot));
const child = spawn(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
child.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
child.on('exit', (code) => { process.exitCode = code ?? 1; });
