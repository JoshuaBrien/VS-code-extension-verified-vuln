const cp = require('child_process');
const fs = require('fs');
const path = require('path');

function activate(context) {
  console.log('POC activated');
  // Create a temporary text file with content
  const tempFilePath = path.join(require('os').tmpdir(), 'poc_note.txt');
  fs.writeFileSync(tempFilePath, 'POC success, please uninstall this extension. More info here: https://www.ox.security/can-you-trust-that-verified-symbol-exploiting-ide-extensions-is-easier-than-it-should-be/ ');
  // Open Notepad with the text file
  cp.exec(`notepad.exe "${tempFilePath}"`);
}

function deactivate() {}

module.exports = { activate, deactivate };