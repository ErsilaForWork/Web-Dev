describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  it("The -power is expected to be Nan", function() {
    assert.isNaN(pow(10, -1));
  });

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});