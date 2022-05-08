let myLinks = ["a", "b", "c"]
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    console.log(myLinks)
})

let listItems = " "
for (let i =0; i < myLinks.length; i++) {
    listItems += "<li>" + myLinks[i] + "</li>"
} 

ulEl.innerHTML = listItems