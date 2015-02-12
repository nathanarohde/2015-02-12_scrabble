describe('wordOrder', function() {
  it('looks at a string returns an array with a word and a numeric value.', function() {
    expect(wordOrder('one')).to.eql( [['one', 1]]);
  });
  it('looks at a string returns an array with a lowercase word and a numeric value.', function() {
    expect(wordOrder('ONE')).to.eql( [['one', 1]]);
  });
  it('removes all non alphanumeric values from a string.', function() {
    expect(wordOrder('^.oNe#%')).to.eql( [['one', 1]]);
  });
  it('looks at a string and returns an array with the number of times a word appears', function() {
    expect(wordOrder('one one one')).to.eql([['one', 3]]);
  });
  it('looks at a string and returns an array with the number of times multiple words appear', function() {
    expect(wordOrder('one one one three three')).to.eql([['one', 3], ['three', 2]]);
  });
  it('looks at a string and returns an array with the number of times multiple words appear and sorts them by the number of times they appear', function() {
    expect(wordOrder('one one one two three three')).to.eql([['one', 3], ['three', 2], ['two', 1]]);
  });
  it('looks at a string and returns an array with the number of times multiple words appear and sorts them by the number of times they appear, and then order of appearance if frequency is the same.', function() {
    expect(wordOrder('one one one two three three four')).to.eql([['one', 3], ['three', 2], ['two', 1], ['four', 1]]);
  });
});
