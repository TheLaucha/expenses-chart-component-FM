const $bars = document.querySelectorAll(".spending_bars_day__bar")
const $text = document.querySelectorAll(".tooltip_text")

fetch("../data.json")
  .then((response) => response.json())
  .then((dataJson) => {
    let barMax = Number(calculateMax(dataJson))
    console.log(barMax)
    for (let i = 0; i < $bars.length; i++) {
      // let promedio = Math.round((dataJson[i].amount * 100) / total)
      $text[i].innerHTML = `$${dataJson[i].amount}`
      $bars[i].style.height = `${dataJson[i].amount}%`
      if (i === barMax) {
        $bars[i].classList.add("max")
      }
    }
  })

function calculateMax(data) {
  console.log(data)
  let iMax = -1
  let expMax = -1
  for (i in data) {
    if (data[i].amount > expMax) {
      expMax = data[i].amount
      iMax = i
    }
  }
  return iMax
}

// Cambiar el total y ponerlo dinamico
