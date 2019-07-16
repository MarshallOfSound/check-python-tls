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

child.on('error', (err) => {
  if (err.message && err.message.includes('ENOENT')) {
    console.error('python executable could not be found, please ensure it is available on PATH');
    process.exit(1);
  } else {
    console.error('Unknown error occurred while checking python TLS version');
    console.error(err);
  }
})
