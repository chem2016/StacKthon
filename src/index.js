const {testTree, target} = require('../test/test1')
const {input0, answer0, input1, input1Func, answer1} = require('../test/test0')
const {symbolFail, symbolPass, nextPage, nextPage2} = require('./domElements')

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
})

var state = {
    nextPage : false
}

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
        if (typeof module.exports === 'function') {
            if(module.exports.number === 1){
                if(module.exports(input0) === answer0){
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
                const myAnswer = module.exports(input1, input1Func)
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
            if(module.exports.number === 3){
                const myAnswer = module.exports(testTree, target)
                if(myAnswer === target){
                    console.log('You Passed the third question!')
                    document.body.appendChild(symbolPass)
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

