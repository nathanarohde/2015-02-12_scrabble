var scrabble = function(input) {

  var input_string = input.toLowerCase();

  var input_letters_array = input_string.split('');

  var total_score = 0;

  var score_table = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'l': 1,
    'n': 1,
    'r': 1,
    's': 1,
    't': 1,
    'd': 2,
    'g': 2,
    'b': 3,
    'c': 3,
    'm': 3,
    'p': 3,
    'f': 4,
    'h': 4,
    'v': 4,
    'w': 4,
    'y': 4,
    'k': 5,
    'j': 8,
    'x': 8,
    'q': 10,
    'z': 10

  };

  var findScore = function( letter ) {
    if( score_table[letter]) {
      total_score += score_table[letter];
    }
  };

  input_letters_array.forEach(function(letter) {
    findScore(letter);
  });

  return total_score;

};

$(document).ready(function(event) {
  $('form#string_input_form').submit(function(event) {
    var input = ($('input#string_input').val());

    if (input.length > 7) {
      $('.output').text('Invalid Entry: Too many characters');
    } else if (!(/[a-zA-Z]/.test(input))) {
      $('.output').text('Invalid Entry: String contains characters other than letters.');
    } else {
      var output = scrabble(input);
      $('.output').text(output);
    }

    $('#result').show();
    event.preventDefault();
  });
});
