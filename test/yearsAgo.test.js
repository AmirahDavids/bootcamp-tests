describe("yearsAgo function", function () {
    it("should return the correct number years ago", function () {
        var expected = 28;
        var actual = yearsAgo(1992);
        assert.equal(expected, actual)
    });
});