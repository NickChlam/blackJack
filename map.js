//var test = [ '10❤', '8☘', '6❤', '10♦', '8♦', '9❤', '10♠', '7♦', '6♦', '10☘', '8♠' ];
//
//var str = test.toString();
//str = str.replace(/,/g, " ")



module.exports = function() { 
    this.card = class Card {
    constructor(value, suit, img) {
        this.value = value;
        this.suit = suit;
        this.img = img;
    }
    }
    this.sum = function(a,b) { return a+b };
    this.multiply = function(a,b) { return a*b };
    //etc


this.fillDeck = function (numDecks, ...Decks){
  
                var cardNum = 0, cardType, worth, suit;
                for (let deck of Decks){
                for(let i =0;i <= numDecks -1; i++ ){
                    for(let s = 1; s<=4; s++){
                        for(let v = 2; v <= 14; v++){
                            cardType = calcCard(v);
                            worth = calcValue(v);
                            suit = calcSuit(s);
                        deck[cardNum] = new Card(v, s, worth);
                        cardNum++;
                        }
                    } 
                }
                }// end args
            } // end fillDeck 

}// end exports 