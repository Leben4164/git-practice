num = document.getElementById("num")
button = document.getElementById("button")

let number = 0

button.addEventListener("click", () => {
  number++
  if (number >= 10) {
    number = 0
  }
  num.innerText = number

})
