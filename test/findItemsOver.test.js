describe("The findItemsOver function",function(){
    it("should find the qty of items higher that 20",function(){
        var listOfItems = [
            {"name":"Sweets","qty":10,"id":1},
            {"name":"Potatoes","qty":25,"id":2},
            {"name":"Carrots","qty":70,"id":3},
            {"name":"Asparagus","qty":1,"id":4}
        ];

        var expected = [
            {"name":"Carrots","qty":70,"id":3}
        ];

        var actual = findItemsOver(listOfItems, 50);

        assert.deepEqual(expected,actual)
    });
});