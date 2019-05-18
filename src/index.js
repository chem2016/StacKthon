const {input1, answer1} = require('../test/stretch1')
const {input2, input2Func, answer2} = require('../test/stretch2')
const {input3, answer3} = require('../test/stretch3')
const {input4Arg1, input4Arg2, answer4} = require('../test/stretch4')
const {input16, answer16First} = require('../test/stretch16')
const {symbolFail, symbolPass} = require('./domElements')
// const runTests = require('run-jasmine-browser');

var editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
})

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
                if(module.exports(input1) === answer1){
                    console.log('You Passed the first question!')
                    document.body.appendChild(symbolPass)
                }
                else{
                    console.log('You failed the second question!')
                    document.body.appendChild(symbolFail)
                }
            }
            if(module.exports.number === 2){
                const myAnswer = module.exports(input2, input2Func)
                if(JSON.stringify(myAnswer) === JSON.stringify(answer2)){
                    console.log('You Passed the second question!')
                    document.body.appendChild(symbolPass)
                }
                else{
                    console.log('You failed the second questoin!')
                    document.body.appendChild(symbolFail)
                }
            }
            if(module.exports.number === 3){
                const myAnswer = module.exports(input3)
                if(JSON.stringify(myAnswer) === JSON.stringify(answer3)){
                    console.log('You Passed the third question!')
                    document.body.appendChild(symbolPass)
                }
                else{
                    console.log('You failed the third questoin!')
                    document.body.appendChild(symbolFail)
                }
            }
            if(module.exports.number === 4){
                const myAnswer = module.exports(input4Arg1, input4Arg2)
                if(JSON.stringify(myAnswer) === JSON.stringify(answer4)){
                    console.log('You Passed the fourth question!')
                    document.body.appendChild(symbolPass)
                }
                else{
                    console.log('You failed the fourth questoin!')
                    document.body.appendChild(symbolFail)
                }
            }
            if(module.exports.number === 16){
                const myAnswer = module.exports(input16)
                if(JSON.stringify(myAnswer) === JSON.stringify(answer16First)){
                    console.log('You Passed the sixteenth question!')
                    document.body.appendChild(symbolPass)
                }
                else{
                    console.log('You failed the sixteenth questoin!')
                    document.body.appendChild(symbolFail)
                }
            }

        };
    } catch (e) {
        console.error(e);
    }
}

