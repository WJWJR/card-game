let Card = require('./card');
let Deck = require('./Deck');

function Blackjack (playerName, dealerName){
  this.deck = new Deck;
  console.log(this.deck);
  this.player = {
    name: playerName,
    cards:[
      this.deck.deal(),
      this.deck.deal()
    ]
  };
  this.dealer = {
    name: dealerName,
    cards: [
      this.deck.deal(),
      this.deck.deal()
    ]
  };
}
Blackjack.prototype.stand = function(){
  while( this.dealerHandsScore() <= 17){
    let nextCard = this.deck.deal()
    this.dealer.card.push(nextCard)
    // this.value.length <=17 = dealerHandScore()
    // let dealerHandsScore = dealerHandScore()
  }
}
module.exports = Blackjack;
