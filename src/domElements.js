const nextPage = document.createElement("div")
nextPage.innerHTML = `<a href="../dist/secondPage.html">to a harder question</a>`
const nextPage2 = document.createElement("div")
nextPage2.innerHTML = `<a href="../dist/thirdPage.html">to a harder question</a>`
const symbolPass = document.createElement("div")
symbolPass.innerHTML = `<span>You Pass!!!</span>`
const symbolFail = document.createElement("div")
symbolFail.innerHTML = `<span>You Failed!!!</span>`
const symbolFailBad = document.createElement("div")
symbolFailBad.innerHTML = `<span>Do not Cheat with build in Javascript keywords or short cuts!!!</span>`


export {
    nextPage,
    nextPage2,
    symbolPass,
    symbolFail,
    symbolFailBad
}