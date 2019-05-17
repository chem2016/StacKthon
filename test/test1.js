// const expect = require("chai").expect;
// const assert = require("chai").assert;
// const findClosetValueInBst = require('../findClosetValueInBst');

class BST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if(value < this.value){
            if(this.left === null){
                this.left = new BST(value)
            }else{
                this.left.insert(value)
            }
        }else{
            if(this.right === null){
                this.right = new BST(value)
            }else{
                this.right.insert(value)
            }
        }
        return this
    }
}
const testTree = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
                        .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
                        .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203)
                        .insert(-51).insert(-403).insert(1001).insert(57).insert(60).insert(4500)

// describe("findClosetValueInBst is a function", () => {
//     it("exist", () =>{
//         expect(findClosetValueInBst).to.be.ok
//     });
//     it("return a value", ()=>{
//         expect(findClosetValueInBst(test, 100)).to.deep.equal(100)
//     });
//     it("testing case #1", ()=>{
//         expect(findClosetValueInBst(test, 5)).to.deep.equal(5)
//     });
//     it("testing case #2", ()=>{
//         expect(findClosetValueInBst(test, 206)).to.deep.equal(206)
//     });
//     it("testing case #3", ()=>{
//         expect(findClosetValueInBst(test, 208)).to.deep.equal(208)
//     });
//     it("testing case #4", ()=>{
//         expect(findClosetValueInBst(test, 4501)).to.deep.equal(4500)
//     });
//     it("testing case #5", ()=>{
//         assert.equal(findClosetValueInBst(test, 4502), 4500)
//     })
//   });

export {testTree}