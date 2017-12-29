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

var readlineSync = require('readline-sync'), chalk = require('chalk'), MAX = 100, MIN = 0, value = 10, key;

console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [Q]\n');

while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + chalk.green.bold('$$') +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN ) { value-=5; } }
  else if (key === 'x') { if (value < MAX ) { value+=5; } }
  else { break;  }
}
console.log(chalk.black.bold.bgYellow('\nA value the user requested: ' + value));

// clear console: '\033c'
//console.log('\n\n' + '\033c');


class Card {
    constructor(value, suit, img) {
        this.value = value;
        this.suit = suit;
        this.img = img;
    }
}


var Deck= [];
var shoe = [];
var value;
var suit;
var dealerHand = [];
var playerHand = [];
var splitHand = []; 

// variables for tracking
var blackJacks = 0, dealerBlackJack = 0, wins = 0, loses = 0, streak = 0, bust = 0, push = 0, splits, lasthandwon = false, longestwin = 0, gamesPlayed= 0, i = 1; ;

//calculate value 
function calcValue(value) {
    switch (value) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return value;
        case 11: 
        case 12:
        case 13:
            return 10;
        case 14:
            return 11;
    }
}
function calcCard(value) {
    switch (value) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return value;
        case 11: return 'jack';
        case 12: return 'queen';
        case 13: return 'king';
        case 14: return 'ace';
    }
}


function choice(value){
    switch (value){
        
        case value[0] = 1: console.log("works!!!!!!!");

    }
}

    function calcSuit(suit){
        switch(suit){
            case 1: return 'spades';
            case 2: return 'clubs';
            case 3: return 'hearts';
            case 4: return 'diamonds';
        }

    }

    function calcHand(Hand){
        var handValue = 0;
        for(let hand of Hand){
            handValue += hand.value;
        }
        return handValue;
    }

    // if has aces
    // if Hand.value

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        // While elements to shuffle
        while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // swap it with current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
    return array;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function dealCards(player, dealer, deck){
        player.push(deck.pop());
        dealer.push(deck.pop());
        player.push(deck.pop());
        dealer.push(deck.pop());

    }

    //fill deck 
    function fillDeck(numDecks, deck){
        cardNum = 0;
        for(let i =0;i <= numDecks -1; i++ ){
            for(let s = 1; s<=4; s++){
                for(let v = 2; v <= 14; v++){
                    cardType = calcCard(v);
                    value = calcValue(v);
                    suit = calcSuit(s);
                deck[cardNum] = new Card(value, s, 'img/cards/' + cardType + '_' + 'of_' + suit + '.png');
                cardNum++;
                }
            } 
        }
    } // end fillDeck 
    console.log('\n\n' + '\033c');
    var readline = require('readline-sync');
    var userName =  readline.question('welcome to Black Jack what is your Name?  ' + '\n');
    console.log("Welcome: " + userName + " lets Play!")

gameOptions = ['Deal', 'Add Money', 'Quit'],
index = readline.keyInSelect(gameOptions, 'What would you like to do?');

switch(index){
    case 0:{
        //deal game 
        fillDeck(5, Deck);
        shuffle(Deck);

        dealCards(playerHand, dealerHand, Deck);
        console.log("Dealer Shows: " + calcCard(dealerHand[1].value) + '\u2764')
            }
}


//\x1B[1A\x1B[K|