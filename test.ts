import * as fs from 'fs';
import * as readline from 'readline';

// Create an interface to listen to stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set the file path where the keystrokes will be logged
const logFilePath = 'keystrokes.log';

// Function to append keystrokes to the log file
function logKeyToFile(key: string) {
  fs.appendFileSync(logFilePath, key);
}

console.log('Keylogger is running. Press any keys; press CTRL+C to exit.');

// Event listener for the 'line' event, which is triggered by pressing Enter
rl.on('line', (input) => {
  logKeyToFile(input + '\n');
});

// Event listener for the 'SIGINT' event, which is triggered by pressing CTRL+C
rl.on('SIGINT', () => {
  console.log('Stopping keylogger.');
  process.exit();
})
