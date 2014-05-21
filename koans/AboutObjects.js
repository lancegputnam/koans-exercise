describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined); /////// undefined because it has just been expected //////// 
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4); /////// there are 5 spaces within the brain part so 4+1=5 //////
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry); /////// Use "They are" and "and the" from the return and use the megalomanic equation. Why are there 4 brains and not 5??? /////////
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2014); ////// when you put var currentYear into the console it gives the current date /////
    expect(megalomaniac.calculateAge()).toBe(44); ////// this just calculates the current year - james woods birth year /////
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true); //////// thebomb in megalomaniac reads to be true ///////
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false); ////// there is no theDetonator in megalomanic so it will read false ////////
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false); ///// there is no secretary so it is a false statement //////

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true); //////// secretary does equal Agent Smith so it is true ////////

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false); ////// if you delete henchman from megalomaniac then you cannot expect it /////
  });


  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined); ////// undefined because simpleCircle does not have a color ////// 
      expect(colouredCircle.colour).toBe("red"); /// the the couloured circle is red //////

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10"); /// simpleCircle has a radius of 10 ////////
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
