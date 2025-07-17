const notes = document.querySelector(".notes-container")
const btn = document.querySelector(".btn")
let notesInput = document.querySelectorAll(".input-box")

function showNotes(params) {              //localStorage se notes utha ke dikhata hai
    notes.innerHTML = localStorage.getItem("notes")
}

function updateStorage (params) {
    localStorage.setItem("notes",notes.innerHTML)
}

showNotes();

btn.addEventListener("click" , () => {
    let box = document.createElement("p")
    let img = document.createElement("img")
    box.className = "input-box"
    box.setAttribute("contenteditable" , "true")
    img.src = "images/delete.png"
    notes.appendChild(box).appendChild(img)
    updateStorage()
})

notes.addEventListener("click" , function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage()
    }

//what does this code means = 
/* User note ke p tag pe click karta hai

App saare input-boxes dhoondta hai

Har input-box pe event lagta hai:
Jab bhi user likhe → updateStorage() chalta hai

Local Storage ya Database update hota hai (function ka kaam)

 */

    else if (e.target.tagName === "P") {
        notesInput = document.querySelectorAll(".input-box")
    notesInput.forEach(nt => {
        nt.onkeyup = function (params) {
            updateStorage()
        }
    })
  }
})

document.addEventListener("keydown" , event => {
    if(event.key === "Enter") {
        document.execCommand("insertlineBreak")
        event.preventDefault()
    }
})

//console.log(localStorage.clear())