describe("My fizzBuzz function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        buzz = new fizzBuzz();
    });
    
    describe("Checks Division By", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return FizzBuzz when called as FizzBuzz(15)", function() {
            var result = FizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
 
    
    });
});