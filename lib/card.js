function Card (value, suit) {
  this.suit = suit;
  this.value = value;
}
Card.prototype.toString = function () {
  let num = {
    1: "Ace",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten"
  }
  if (this.value >= 1 && this.value <=10){
  return `${num [this.value]} of ${this.suit}`;
  }
  return `${this.value} of ${this.suit}`;

}


module.exports = Card;
