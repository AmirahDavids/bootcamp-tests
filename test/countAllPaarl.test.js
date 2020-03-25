describe("The countAllPaarl function",function () {
    it("should return the correct number of registrations for Paarl",function(){
        assert.equal(0,countAllPaarl("CA 1234,CA 555,CY 00001"));
        assert.equal(1,countAllPaarl("CA 1234,CA 555,CJ 00001"));
        assert.equal(2,countAllPaarl("CA 1234,CA 555,CY 00001,CJ 1234,CA 555,CY 00001,CA 1234,CJ 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001"));
        assert.equal(4,countAllPaarl("CJ 1234,CA 555,CJ 00001,CJ 1234,CA 555,CY 00001,CJ 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001,CA 1234,CA 555,CY 00001"))
    }); 
 });