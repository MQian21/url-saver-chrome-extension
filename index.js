let myLinks = ["a", "b", "c"]
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    console.log(myLinks)
})

for (let i =0; i < myLinks.length; i++) {
    ulEl.innerHTML += "<li>" + myLinks[i] + "</li>"
} 