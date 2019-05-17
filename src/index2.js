const {testTree} = require('../test/test1')

const symbol = document.createElement("div")
symbol.innerHTML = `<span>You Pass!!!</span>`
const root = document.createElement("div")
root.innerHTML = `<p>Code Ninja.</p>`
const questioin = document.createElement("div")
questioin.innerHTML = `<p>
    Find Closet Value in BST

    You are given a BST data structure consisting of BST nodes. Each node has 
    an integer value store in a property called "value" and two children nodes
    store in properties called "left" and "right", respectively. You are given
    a target integer value; write a function that finds the closest value to that
    target value contained in the BST. Assume that there will be only one closest
    value.

</p>`
document.body.appendChild(questioin)
document.body.appendChild(root)

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
})
const runButton = document.getElementById('run-button'); 
runButton.onclick = () => {
    const currentCode = editor.getValue();
    try {
        const capturedValue = eval(currentCode);
        console.log(currentCode)
        if(capturedValue === 4){
            console.log('You Pass!')
            document.body.appendChild(symbol)
        }else{
            console.log('You failed!')
        }
        console.log('Result: ', capturedValue);
        if (typeof capturedValue === 'function') {
            console.log('run code')
            capturedValue()
        };
    } catch (e) {
        console.error(e);
    }
}
