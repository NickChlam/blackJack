// testing for blackjack js file exports
require('./blackJack.js')();
var Hand = [];

card = new Card(5, 2, 3);

//Hand.push(card);
//Hand.push(card);

//console.log(Hand);
//
//console.log(card);
//
//console.log(calcValue(11));
//
//console.log(calcCard(11));
//
//console.log(calcSuit(3));
//
//console.log(displaySuit(card));
//
//console.log(calcHand(Hand));

var deck = [];
var deck2 = [];
var deck3 = [];
var deck4 = [];

function Fill(numDecks, ...Decks){
  
                var cardNum = 0, cardType, worth, suit, decker = [], z = 0;
               
                    
                    for (let deck of Decks){
                    for(let s = 1; s<=4; s++){
                        for(let v = 2; v <= 14; v++){
                            cardType = calcCard(v);
                            worth = calcValue(v);
                            suit = calcSuit(s);
                        decker[cardNum] = new Card(v, s, worth);
                            
                        cardNum++;
                        }
                    }
                        deck[z] = decker;
                        z++;
                }
               
            
            } // end fillDeck 

//Fill(1,deck, deck2);
////console.log(deck);
//console.log(deck2);


function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log( titles[0] ); // Consul
  console.log( titles[1] ); // Imperator
  console.log( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator", "Nickhoas", "SHit");
