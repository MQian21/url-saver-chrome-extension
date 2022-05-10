let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const linksLocalStorage = JSON.parse(localStorage.getItem("myLinks"))


if (linksLocalStorage) {
    myLinks = linksLocalStorage
    renderLinks()
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLinks = []
    renderLinks()
})

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    renderLinks()
})

function renderLinks() {
    let listItems = " "
    for (let i =0; i < myLinks.length; i++) {
       listItems += `
       <li>
       <a target='_blank' href='${myLinks[i]}'> ${myLinks[i]}</a>
       </li>
       `
    }  
    ulEl.innerHTML = listItems
}
