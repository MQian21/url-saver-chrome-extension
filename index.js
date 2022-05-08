let myLinks = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    renderLinks()
})

function renderLinks() {
    let listItems = " "
    for (let i =0; i < myLinks.length; i++) {
       // listItems += "<li><a target='_blank' href=' " + myLinks[i] + "'>" + myLinks[i] + "</a></li>"
       listItems += `
       <li>
       <a target='_blank' href='${myLinks[i]}'> ${myLinks[i]}</a>
       </li>
       `
    }  
    ulEl.innerHTML = listItems
}
