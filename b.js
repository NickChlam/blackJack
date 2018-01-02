//**********************************************************************************************************************************//







//*********************************************************************************************************************************//

module.exports = function() { 
        this.Card = class Card {
        constructor(value, suit, worth) {
            this.value = value;
            this.suit = suit;
            this.worth = worth;
            }   
        }
    
    this.sum = function(a,b) { return a+b };
    this.multiply = function(a,b) { return a*b };
    //etc

        //calculate value 
       this.calcValue = function (value) {
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
        }// end calcValue
       

        this.calcCard = function (value) {
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
                case 11: return 'J';
                case 12: return 'Q';
                case 13: return 'K';
                case 14: return 'A';
            }
        }
            this.calcSuit = function (suit){
                switch(suit){
                    case 1: return 'spades';
                    case 2: return 'clubs';
                    case 3: return 'hearts';
                    case 4: return 'diamonds';
                }

            }
            
            // diplay unicode charachter on 
           this.displaySuit = function (hand){
                switch (hand.suit){
                    case 1: return '\u2660';
                    case 2: return '\u2618';
                    case 3: return '\u2764';
                    case 4: return '\u2666';
                }
            }
           
            this.calcHand = function (Hand){
                var handValue = 0;
                for(let hand of Hand){
                    handValue += hand.worth;
                }
                return handValue;
            }
            


            this.shuffle = function (array) {
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
            
            this.shuffleArray = function (array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

           this.dealCards =  function (player, dealer, deck){
                player.push(deck.pop());
                dealer.push(deck.pop());
                player.push(deck.pop());
                dealer.push(deck.pop());

            }
            //fill deck 
            this.fillDeck = function (numDecks, deck){
                var cardNum = 0, cardType, worth, suit;
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
            } // end fillDeck 
            
}// end exports