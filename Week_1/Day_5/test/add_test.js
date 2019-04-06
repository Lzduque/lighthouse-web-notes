var expect = require("chai").expect; //the tester!
var add = require('../add'); //the file we area testing

describe("add",function() {
  it('should return 4 if we add 2 and 2 together', function() {
    var expected = 4;
    var result = add(2,2);
    expected(result).to.equal(expected);
  }
  );
}
);