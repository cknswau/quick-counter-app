let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

incBtn.addEventListener("click", function() {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener("click", function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})
