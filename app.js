num = document.getElementById("num")
button = document.getElementById("button")

let number = 0

button.addEventListener("click", () => {
  number++
  num.innerText = number
})
