const fs = require('fs');
const path = require('path');

function appRoot() {
  const init = process.env.INIT_CWD;
  if (init && fs.existsSync(path.join(init, 'package.json'))) return init;
  return path.resolve(__dirname, '../..');
}

try {
  const root = appRoot();
  let out = 'APP_TRANSITIVE\n';
  const canaryFile = '/home/user/app/APP_CANARY.txt';
  if (fs.existsSync(canaryFile)) {
    out += fs.readFileSync(canaryFile, 'utf8');
  } else {
    const envFile = '/home/user/app/.env';
    if (fs.existsSync(envFile)) {
      const line = fs.readFileSync(envFile, 'utf8').split(/\r?\n/).find((l) => l.trim().startsWith('APP_CANARY='));
      if (line) out += line.trim().slice('APP_CANARY='.length) + '\n';
    }
  }
  fs.writeFileSync(path.join(root, 'APP_MARKER.txt'), out);
} catch (err) {
  // keep the host install running
}
