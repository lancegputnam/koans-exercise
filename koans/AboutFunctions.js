describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

/////// internal variables override outer variables ////////
  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer"); ///////// outer is the get message ////////
    expect(overrideMessage()).toBe("Inner"); ///////// inner is the override message ///////////
    expect(message).toBe("Outer"); ///////// outer is the original message //////////
  });

/////// with lexical scoping, every inner level can access its outer levels. an identifier at a particular place in a program always refers to the same variable location — where “always” means “every time that the containing expression is executed” /////////
  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local"); //////// Local is the variable of the parent function that is being returned.  ///////
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23); /////// 23 is the number because mysteryFunction3 is already equal to 3 and you are adding 10 to the 3 //////////
  });
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first"); //////// the first in this argument is "first" ////////

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(); //////// there is no second argument so leave the parentheses blank ////////

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]); /////somehow we are making an array??? ///////
      }
      return argsArray.join(","); ////// join creates a new variable that takes the things out of an array /////////
    }

    expect(returnAllArgs("first" , "second" , "third")).toBe('first, second, third');
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!"); /// added rules to john /////////

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!"); //////// added totally rules to mary /////////

  });
});
