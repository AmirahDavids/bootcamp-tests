describe("The countRegNumber function",function(){
    it("should give the correct number of registrations in a string",function(){
        var expected = 2;
        var actual = countRegNumber("CA 213-456,CY 123456");
        assert.equal(expected, actual)
    });
});