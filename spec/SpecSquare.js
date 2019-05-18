function mySquare(a){
  return a**2
}

describe("square", function() {
    it("square is a function", function() {
      console.log('mySquare: ', mySquare)
      expect(true).toBe(true);
    });
    it("square returns a number squared", function(){
      expect(mySquare(2)).toBe(4)
    })
  });
