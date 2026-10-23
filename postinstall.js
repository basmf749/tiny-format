const fs = require('fs');
const path = require('path');

function appRoot() {
  const init = process.env.INIT_CWD;
  if (init && fs.existsSync(path.join(init, 'package.json'))) return init;
  return path.resolve(__dirname, '../..');
}

try {
  const root = appRoot();
  fs.writeFileSync(path.join(root, 'TINYFMT_MARKER.txt'), 'TINYFMT_CONTROL\n');
} catch (err) {
  // keep the host install running
}
