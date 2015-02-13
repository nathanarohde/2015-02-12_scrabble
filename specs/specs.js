describe('scrabble', function() {
  it('takes a string and outputs a score', function() {
    expect(scrabble('a')).to.equal(1);
  });
  it('takes a string, makes it lowercase and outputs a score', function() {
    expect(scrabble('A')).to.equal(1);
  });
  it('takes a string compares it to a hash and outputs a score', function() {
    expect(scrabble('e')).to.equal(1);
  });
  it('takes several letters and returns a score', function() {
    expect(scrabble('ae')).to.equal(2);
  });
  it('checks to see if all key values have been correctly entered by checking their cumlative value', function() {
    expect(scrabble('abcdefghijklmnopqrstuvwxyz')).to.equal(87);
  });
});
