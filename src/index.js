const {testTree} = require('../test/test1')
const {input, answer} = require('../test/test0')
const {input1, input1Func, answer1} = require('../test/test0')
const nextPage = document.createElement("div")
nextPage.innerHTML = `<a href="../dist/secondPage.html">to a harder question</a>`
const nextPage2 = document.createElement("div")
nextPage2.innerHTML = `<a href="../dist/thirdPage.html">to a harder question</a>`
const symbolPass = document.createElement("div")
symbolPass.innerHTML = `<span>You Pass!!!</span>`
const symbolFail = document.createElement("div")
symbolFail.innerHTML = `<span>You Failed!!!</span>`
const root = document.createElement("div")
root.innerHTML = `<p>Code Ninja.</p>`
const questioin = document.createElement("div")
questioin.innerHTML = `<p>
    please export you function at the end:
    module.exports = yourFunction
</p>`
document.body.appendChild(questioin)
document.body.appendChild(root)

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
})

var userFunction = null;
const runButton = document.getElementById('run-button'); 
runButton.onclick = () => {
    const currentCode = editor.getValue();
    try {
        window.newGlobal = {
            window: {},
            module: {
                exports: null,
            },
        };
        eval(`with (newGlobal) { ${currentCode} }`);

        const module = window.newGlobal.module;
        const userFunction = module.exports
        console.log('the function you entered is: ', userFunction);
        if (typeof module.exports === 'function') {
            console.log('The number is: ', module.exports.number)
            if(module.exports.number === 1){
                console.log('This is the first function: ', module.exports)
                if(module.exports(input) === answer){
                    console.log('You Passed the first question!')
                    document.body.appendChild(symbolPass)
                    document.body.appendChild(nextPage)
                }
                else{
                    console.log('You failed the second question!')
                    document.body.appendChild(symbolFail)
                }
            }
            if(module.exports.number === 2){
                console.log('This is the second function: ', module.exports)
                const myAnswer = module.exports(input1, input1Func)
                console.log('myAnswer: ', myAnswer)
                if(JSON.stringify(myAnswer) === JSON.stringify(answer1)){
                    console.log('You Passed the second question!')
                    document.body.appendChild(symbolPass)
                    document.body.appendChild(nextPage2)
                }
                else{
                    console.log('You failed the second questoin!')
                    document.body.appendChild(symbolFail)
                }
            }
        };
    } catch (e) {
        console.error(e);
    }
}

