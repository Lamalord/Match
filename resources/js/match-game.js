var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

  var numbers = [];
  console.log(numbers);
  for(i = 1; i < 9; i++){
    numbers.push(i);
    numbers.push(i);
  };

  var random = [];
  while(numbers.length > 0){
    var access = Math.floor(Math.random() * numbers.length);
    random.push(numbers[access]);
    numbers.splice(access, 1);
  };
  return random; 
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  ($game).empty();
  var zaehler = 0;
  while(zaehler < cardValues.length){

    zaehler = zaehler + 1;
  };
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};