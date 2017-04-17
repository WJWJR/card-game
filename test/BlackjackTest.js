// - A game (for our purposes) has one player and a dealer
// - At the start of the game, the player gets two cards and so does the dealer
// - The player can ask for another card
// - The player can repeat that request as many times as desired
// - Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17
// - For today, assume that an Ace is worth 1, a face card (Jack, Queen, or King) is worth 10, and any other card is worth its number

const assert = require('assert');
const Deck = require('../lib/Deck');
const Card = require('../lib/Card');
const Blackjack = require('../lib/Blackjack');

describe('Blackjack', function(){
  it('has one player', function() {
    let game = new Blackjack('Bobby', 'John');
    assert.equal(game.player.name, 'Bobby');
    assert.equal(game.dealer.name, 'John');

  })
  it('start game, deals two card to player and dealer', function() {
    let game = new Blackjack('Bobby', 'John');
    assert.equal(game.player.cards.length, 2);
    assert.equal(game.dealer.cards.length, 2);
  })

  describe('NewCard', function(){
    it('player can ask for another card', function(){
      let game = new Blackjack('Bobby', 'John');
      let playerHandLength = game.player.cards.length;
      let nextCard = game.deck.deal()
      game.player.cards.push(nextCard)
      assert(game.player.cards.length, playerHandLength);
    })

  })
  describe('NoMoreCards', function(){
    it('player doesnt want any more cards', function() {
      let game = new Blackjack('Bobby', 'John');
      let dealerHandScore = game.dealer.cards.length;
      let nextCard = game.deck.deal()
      // assert(game.dealer.cards.);
    })

  })
});
