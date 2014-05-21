var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  /// The filter() method creates a new array with all elements that pass the test implemented by the provided function. ////

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1,3]); //////// the filter equation means that the number is odd /////
    expect(odd.length).toBe(2); //////// there are 2 odd numbers ///////
    expect(numbers.length).toBe(3); ///////// there are 3 total numbers in the array, even and odd /////
  });

////// The map() method creates a new array with the results of calling a provided function on every element in this array.


  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2, 3, 4]); //// you are just adding 1 to each number based on the function above ////
    expect(numbers).toEqual([1, 2, 3]); ///// they are just asking for the numbers from the above variable ////// 
  });

///// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.
  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(6); ////// add 1 plus 2 plus 3 and you get 6 ///////
    expect(numbers).toEqual([1, 2, 3]); ///// they are just asking for the numbers from the variable above ////
  });

/////// The forEach() method executes a provided function once per array element. //////
  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse"); ////// 2 is even so it is true. 1 and 3 are odd so they are false. But why is this so? //////
    expect(numbers).toEqual([1, 2, 3]); ////// this is from the variable numbers above /////
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true); //// ran this in the console and came out true. all that are in the onlyeven variable are even ///
    expect(_(mixedBag).all(isEven)).toBe(false); //// ran this in the console and came out false. all that are in the mixedBag are not even //////
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true); //// they are asking if any of the numbers are even this time //////
  });

  it("should use range to generate an array", function() { ////// I DONT UNDERSTAND RANGE??? //////
      expect(_.range(3)).toEqual([0, 1, 2]);
      expect(_.range(1, 4)).toEqual([1, 2, 3]);
      expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);  //// flatten merges the arrays together /////
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6); //// 6 because the flatten merges the numbers together, map adds 1 to each number and reduce adds all the numbers together ////
  });

});

