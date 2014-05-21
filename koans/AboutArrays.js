describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe("object"); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0); ////// We did zero because 0 is the first object in the array  ////////
    expect(multiTypeArray[2]).toBe("two"); ///////// We did “two” because it is the third object ////
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6); ////////// We did 6 because there are now six numbers in the array ///////////

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10); ///////// There are now 10 objects in the new Array ///////////

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5); ///////// The array length is 5 so the to be is 5 ///////////
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"]; //////// slices count the spaces between the words, starting at 0 before peanut ////////

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]); /////// there is no 100 so it stops at jelly ////////
    expect(array.slice(5, 1)).toEqual([]); ////// doesnt go backwards and there is no 5 /////////
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three"); ///////// we did three because of the slice /////////
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]); ///////// We do 1, 2, 3 because 3 has been pushed into the array ///////

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3); ////////// Pop takes out the last element in the array and returns it so we are left with 3 /////////
    expect(array).toEqual([1, 2]); ///////// We are left with 1 and 2 as an array because the 3 was popped and mutated out /////////
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]); ////////// Unshift adds an element to the beginning of an array //////////

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3); //////////// The first element, 3, was taken out of the element. ///////////
    expect(array).toEqual([1,2]); ///////// 3 is mutated out so we are left with an array of 1 and 2 /////////
  });
});
