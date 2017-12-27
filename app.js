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
    } 

    function fillAces(hand){
        hand[0] = new Card(11, 2, "img/cards/ace_of_clubs.png");
        hand[1] = new Card(11, 4, "img/cards/ace_of_diamonds.png");

    }

    function hasAce(hand){
        for(let i= 0; i < hand.length; i++ )
        {
           if(hand[i].value === 11){return true;}
        }   
    }

//fill the deck of cards
fillDeck(5, Deck);

// shuffle Deck

shuffleArray(Deck);

// Deal Cards 




// check for dealer and player blackjack -----------------------------------------------------------------------------

var c;
for( c = 0; c < 10; c++)
{
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    if (shoe.length > 0){
    Deck= shoe;
    console.log("Deck " + Deck.length + " " + "Shoe " + shoe.length + " ________________________________________________________________________________________________________________________________________");
    shoe = [];
        console.log("Shoe " + shoe.length)
    }
    //change shoe ace values to 11
    Deck.map(x => x.value === 1? x.value = 11: x.value = x.value )
    
    shuffleArray(Deck);
    shuffle(Deck);
    while( Deck.length > 20){ // while( Deck.length > 20)

    dealCards(playerHand, dealerHand, Deck)
        var currentCard; 
        if(calcHand(dealerHand) === 21 && calcHand(playerHand) != 21){
            //dealer has blackjack
            //player loses
            console.log("Dealer Black Jack - LOSER ");
            dealerBlackJack++;
            loses++;
            gamesPlayed++;
            
        }else if(calcHand(dealerHand) === 21 && calcHand(playerHand) === 21){
            // draw
            console.log("blackJack PUSH");
            push++;
            gamesPlayed++;
        }else if(calcHand(playerHand) === 21 && calcHand(dealerHand) != 21){
            // player blackjack
            blackJacks++;
            wins++;
            gamesPlayed++;
            console.log("WINNER: Player BlackJack")
        }else{


        //play game automation ------------------------------------------------------------------------------------------------------------
                if(playerHand[0].value === 11 && playerHand[1].value === 11)
                {
                    //split()
                    playerHand[1].value = 1;
                    splits++;
                }
                while(calcHand(playerHand) <16 && dealerHand[1].value >= 6 | calcHand(playerHand) < 12   ) // && dealerHand[1].value >= 6 | calcHand(playerHand) < 12   
                {
                        var currentCard = Deck.pop();
                        
                        
                        if(currentCard.value === 11 && calcHand(playerHand) < 11){
                            currentCard.value = 11;
                            console.log("Ace = 11 : Value : " + currentCard.value);
                            
                        }else if(currentCard.value === 11 && calcHand(playerHand) >= 11){
                            currentCard.value = 1;
                            console.log("Ace = 1 : Value : " + currentCard.value);
                        }
                        if( (calcHand(playerHand) + currentCard.value) > 21 && playerHand.map(x => x.value).indexOf(11) > -1){ 
                        var acePosition = playerHand.map(x => x.value).indexOf(11);
                        playerHand[acePosition].value = 1;
                        }
                    playerHand.push(currentCard);
                    }

                    if(dealerHand[0].value === 11 && dealerHand[1].value === 11)
                    {
                        //split()
                        dealerHand[1].value = 1;
                        splits++;
                    }
                while(calcHand(dealerHand) <=16 && calcHand(playerHand) < 22)
                {
                    var currentCard1 = Deck.pop();
                    if(currentCard1.value === 11 && calcHand(dealerHand) < 11 | calcHand(dealerHand) > 16){
                        currentCard1.value = 11;
                        
                    }else if(currentCard1.value === 11 && calcHand(dealerHand) >= 11){
                        currentCard1.value = 1;
                        
                    }
                    if( (calcHand(dealerHand) + currentCard1.value) > 21 && dealerHand.map(x => x.value).indexOf(11) > -1){ 
                        var acePosition = dealerHand.map(x => x.value).indexOf(11);
                        dealerHand[acePosition].value = 1;
                        }
                    dealerHand.push(currentCard1);
                    
                }

            }

            
    
            if(calcHand(playerHand) > 21){bust++; loses++ }
            else if(calcHand(playerHand) <=21 &&  calcHand(dealerHand) <  calcHand(playerHand) | (calcHand(dealerHand) > 21 && calcHand(playerHand) <=21)){wins++; lasthandwon = true}
        
            else if(calcHand(dealerHand) <=21 &&  calcHand(playerHand) < calcHand(dealerHand)  | (calcHand(playerHand) > 21 && calcHand(dealerHand) <=21)){loses++; lasthandwon = false}
        
            else if(calcHand(playerHand) === calcHand(dealerHand)){push++}
            streak = lasthandwon === true ? streak = streak +1: streak = 0;
            longestwin = longestwin < streak ? streak: longestwin;
            console.log("player: " + calcHand(playerHand) );
	        console.log(playerHand);
            
            console.log("dealer: " + calcHand(dealerHand));
            console.log(dealerHand);
            console.log();
            console.log();
            gamesPlayed++;
            var q = 0,w = 0;


            while(playerHand.length > 0){
                shoe.push(playerHand.pop());
                
            }
           
            while(dealerHand.length > 0){
                shoe.push(dealerHand.pop());
            }

            
            playerHand = [];
            dealerHand = [];
        
    }

        // add rest of Deck to shoe
        while(Deck.length > 0) {
        shoe.push(Deck.pop());
        }
}// end while loop - end of play


console.log(shoe.length);

console.log();
console.log();
        console.log("wins: " + wins + " Win: " + Math.ceil(((wins)/gamesPlayed) *100) + "% " +  " loses: " + loses + " Pushes: " + push + " blackJacks: " + blackJacks + " Games Played: " + gamesPlayed + " Busts: " + bust) ;

console.log();
console.log();



//show cards on UI -----------------------------------------------------------------------------------------------------------------------------

// fillDeck(5, Deck);
// shuffleArray(Deck);
// dealCards(playerHand, dealerHand, Deck);

// document.querySelector('.card').src =   playerHand[0].img
// document.querySelector('.card-2').src = playerHand[1].img;


// document.querySelector('.card-d').src =   dealerHand[0].img
// document.querySelector('.card-d2').src = dealerHand[1].img;


// var counter = 3;
// document.querySelector('.btn-primary').addEventListener("click", () => {
//     playerHand.push(Deck.pop());
//     console.log(calcHand(playerHand));

//     document.querySelector('#player').appendChild(document.createElement("img")).outerHTML = '<img class="card-' + counter +'"' + ' src="#" alt=""> ' ;
//     document.querySelector('.card-' + counter).src =playerHand[counter -1].img;
//     counter++;
 
// });



//--------------------------------------------------------------------------------------------------------------------------------------------------


//2 3 4 5 6 7 8 9 10 J Q K A 
// fillDeck(1,Deck);
// shuffleArray(Deck);

//dealCards(playerHand, dealerHand, Deck);

// dealGame();

// var left = -40;
// var counter = 0;
// var pos = 40;
// document.querySelector('#player').appendChild(document.createElement("div")).outerHTML = '<div class="hand-' + i  + '"' + ' > ';
// document.querySelector('.btn-deal').addEventListener("click", () => {
//     console.log("in here");
//     playerHand.push(Deck.pop());
//     document.querySelector('.hand-' + i).appendChild(document.createElement("img")).outerHTML = '<img class="card-' + i + counter +'"' + ' src="#" alt=""> ' ;
//     document.querySelector('.card-' + i + counter).src =playerHand[counter ].img;
//     document.querySelector('.card-' + i + counter).style.position = "relative";
//     document.querySelector('.card-' + i + counter ).style.right = pos + "px";
//     counter++;
//     pos +=40;
//    }); // NED CLICK 

function dealGame(){
    var counter = 0;
    pos = 0;
    //deal player card
  
    playerHand.push(Deck.pop());
    document.querySelector('.hand-' + i).appendChild(document.createElement("img")).outerHTML = '<img class="card-' + i + counter +'"' + ' src="#" alt=""> ' ;
    document.querySelector('.card-' + i + counter).src =playerHand[counter ].img;
    document.querySelector('.card-' + i + counter).style.position = "relative";
    document.querySelector('.card-' + i + counter ).style.right = pos + "px";
    
    counter++;
    
   setTimeout(function() {
    playerHand.push(Deck.pop());
    document.querySelector('.hand-' + i).appendChild(document.createElement("img")).outerHTML = '<img class="card-' + i + counter +'"' + ' src="#" alt=""> ' ;
    document.querySelector('.card-' + i + counter).src =playerHand[counter ].img;
    document.querySelector('.card-' + i + counter).style.position = "relative";
    document.querySelector('.card-' + i + counter ).style.right = pos + "px";
   }, 1000);
  

    counter++;
    pos +=40;   

}

function sendCard(counter, i, pos){
   
    dealerHand.push(Deck.pop());
    
    document.querySelector('#dealer').appendChild(document.createElement("div")).outerHTML = '<div class="dhand-' + i  + '"' + ' > ';
    document.querySelector('.dhand-' + i).appendChild(document.createElement("img")).outerHTML = '<img class="dcard-' + i + counter +'"' + ' src="#" alt=""> ' ;
    document.querySelector('.dcard-' + i + counter).src =dealerHand[counter ].img;
    document.querySelector('.dcard-' + i + counter).style.position = "relative";
    
}

