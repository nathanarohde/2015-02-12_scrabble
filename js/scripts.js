var wordOrder = function(input_string) {
  var lowercase_input_string = input_string.toLowerCase();
  var final_input_string =lowercase_input_string.replace(/[^a-z0-9]/gmi, " ");
  var input_split_into_array = final_input_string.split(' ');
  var words_list = [ ];

  input_split_into_array.forEach(function(input_word) {
    if (words_list.length === 0) {
      words_list.push([input_word,1]);
    } else {
      for (var i = 0; i<words_list.length; i++) {
        if ((words_list[i][0]) === input_word) {
          words_list[i][1] += 1;
          break;
        } else {
          if (i === words_list.length - 1) {
          words_list.push([input_word,1]);
          break;
          }
        }
      }
    }
  });

  function compare(a,b) {
    if ((a[1]) < (b[1]))
      return 1;
      if ((a[1]) > (b[1]))
        return -1;
        return 0;
      }
      words_list.sort(compare);

  return words_list;
};

$(document).ready(function(event) {
  $('form#string_input_form').submit(function(event) {
    var input = ($('input#string_input').val());
    var output_array = wordOrder(input);

    $.each (output_array, function( index, word_number_pair) {
         $('#result .output').append("<li><h4>"+(word_number_pair[0])+"</h4></li>");
      });

    $('#result').show();
    event.preventDefault();

  });
});
