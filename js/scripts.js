var wordOrder = function(input_string) {
  var input_split_into_array = input_string.split(' ')
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
