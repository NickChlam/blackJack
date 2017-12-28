//const readline = require('readline');
// var prompt = require('prompt');
//
//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});
//var ans;
//rl.question('What do you think of Node.js? ', (answer) => {
//  // TODO: Log the answer in a database
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//    ans = answer;
//    console.log(ans);
//  rl.close();
//});
//
//
//
//  prompt.start();
//
//  prompt.get(['username', 'email'], function (err, result) {
//    if (err) { return onErr(err); }
//    console.log('Command-line input received:');
//    console.log('  Username: ' + result.username);
//    console.log('  Email: ' + result.email);
//  });
//
//  function onErr(err) {
//    console.log(err);
//    return 1;
//  }


//var readlineSync = require('readline-sync');
// 
//// Wait for user's response. 
//var userName = git readlineSync.question('May I have your name? ');
//console.log('Hi ' + userName + '!');

//var readlineSync = require('readline-sync'),
//  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo', 'monkey'],
//  index = readlineSync.keyInSelect(animals, 'Which animal?');
//console.log('Ok, ' + animals[index] + ' goes to your room.');

var readlineSync = require('readline-sync'),
    chalk = require('chalk'),
  MAX = 60, MIN = 0, value = 30, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log(chalk.black.bold.bgYellow('\nA value the user requested: ' + value));