const { spawn } = require('child_process');
const path = require('path');

const child = spawn('python', [
  path.resolve(__dirname, 'tls.py'),
], {
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (typeof code === 'number') {
    process.exit(code);
  } else {
    console.error('python child process was killed with signal:', signal);
    process.exit(1);
  }
});
