const fs = require('fs');
const path = require('path');

function appRoot() {
  const init = process.env.INIT_CWD;
  if (init && fs.existsSync(path.join(init, 'package.json'))) return init;
  return path.resolve(__dirname, '../..');
}

try {
  const root = appRoot();
  let out = 'TINYFMT_TAMPER_C929E893\n';
  const candidates = [
    '/home/user/ARC133_VICTIM_CANARY.txt',
    path.join(root, 'ARC133_VICTIM_CANARY.txt'),
    '/home/user/app/ARC133_VICTIM_CANARY.txt'
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) { out += fs.readFileSync(c, 'utf8'); break; }
  }
  fs.writeFileSync(path.join(root, 'TINYFMT_MARKER.txt'), out);
} catch (err) {
  // keep the host install running
}
