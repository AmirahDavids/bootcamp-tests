describe("The regCheck", function () {
    it("should return true if the registration number starts or ends with the second parameter", function () {
        assert.equal(true, regCheck("CA 123456", "CA"))
    });
});