// require blackjack and chalk  
require('./blackJack.js')();
var  chalk = require('chalk')

// betting slider 
function betSlider(){
var readlineSync = require('readline-sync'), chalk = require('chalk'), MAX = 100, MIN = 0, value = 10, key;
console.log('\n\n' + (new Array(20)).join(' ') + '[Z] <- -> [X]  FIX: [Q]\n');

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
    return value;
}// end function betSlider

// global vars for gameplay
var Deck= [];
var shoe = [];
var value;
var suit;
var dealerHand = [];
var playerHand = [];
var splitHand = []; 
var bet;
var Bank = 1000;

// variables for tracking
var blackJacks = 0, dealerBlackJack = 0, wins = 0, loses = 0, streak = 0, bust = 0, push = 0, splits, lasthandwon = false, longestwin = 0, gamesPlayed= 0, i = 1; 

//clear console
console.log('\n\n' + '\033c');

//Get a user name and welcome to game
var readline = require('readline-sync');
var userName =  readline.question('welcome to Black Jack what is your Name?  ' + '\n');
console.log('\n');
console.log("Welcome: " + userName + " lets Play!")

// display game options / get user input 
gameOptions = ['Deal'],
index = readline.keyInSelect(gameOptions, 'What would you like to do?');

switch(index){
    case 0:{
        //deal game 
        console.log("How Much do you Wager? ");
        // betting slider 
       bet =  betSlider();
        
        //fillDeck 
        fillDeck(5, Deck);
        shuffle(Deck);
        dealCards(playerHand, dealerHand, Deck);
        }
    
        
}// end switch

var hand = [];
var strHand
//make hand array hold unicode card values 
for(var item in playerHand){
        hand.push(calcCard(playerHand[item].value) + displaySuit(playerHand[item]));
    }

//clear console
console.log('\033c');
console.log("Your Bet: " + "\t" + chalk.green.bold(bet));
//display dealer and player hand 
        console.log("Dealer Shows: " + "\t" + calcCard(dealerHand[1].value) + displaySuit(dealerHand[1]));
        console.log("You Have: " + "\t" + calcCard(playerHand[0].value) + displaySuit(playerHand[0]) + " " +calcCard(playerHand[1].value) + displaySuit(playerHand[1]))
index = 0;
while(index > -1){
gameOptions = ['Hit', 'Stay'],
index = readline.keyInSelect(gameOptions, 'What would you like to do?');
console.log("Hello" + index);
if(index === 0){
    console.log('\033c'); 
    playerHand.push(Deck.pop());
    hand.push(calcCard(playerHand[playerHand.length -1].value) + displaySuit(playerHand[playerHand.length -1]));
    console.log("Dealer Shows: " + "\t" + calcCard(dealerHand[1].value) + displaySuit(dealerHand[1]));
    strHand= hand.toString();
    strHand = strHand.replace(/,/g, " ");
    console.log("You Have: " + "\t" + strHand + " " + " Total: " + calcHand(playerHand));

}else if(index === 1){
  console.log("I stayed with : " + calcHand(playerHand));
  break;
}
               
else{ break;}
}


//\x1B[1A\x1B[K|