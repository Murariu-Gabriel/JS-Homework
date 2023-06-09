const chessTable = document.getElementById("chess-table")

const createBox = (classNum) => {
  const box = document.createElement("div")
  box.classList.add("box")
  box.classList.add(classNum)

  return box
}

// Initial aici am generat id-uri cu numerele din for dar am schimbat metoda presupunand ca nu este o practica foarte corecta in cazul in care as dori sa ma folosesc de id pentru alte lucruri.

const addChildrenToChessTable = (num, func) => {
    for (let i = 1; i <= num; i++) {
        chessTable.appendChild(func(i))
    }
}

addChildrenToChessTable(64, createBox)


const boxes = document.body.getElementsByClassName("box")

const isEven = (el) => {
  return el % 2 === 0
}

const isOdd = (el) => {
  return el % 2 === 1
}

const checkLine = (num) => {
  if (num >= 0 && num <= 8) {
    return 1
  }

  if (num >= 9 && num <= 16) {
    return 2
  }

  if (num >= 17 && num <= 24) {
    return 1
  }

  if (num >= 25 && num <= 32) {
    return 2
  }

  if (num >= 33 && num <= 40) {
    return 1
  }

  if (num >= 41 && num <= 48) {
    return 2
  }

  if (num >= 49 && num <= 56) {
    return 1
  }

  if (num >= 57 && num <= 64) {
    return 2
  }
}


const addBlackAndWhite = (list) => {
  for (const element of list) {
    const numOfClass = element.classList[1]

    if (isOdd(checkLine(numOfClass))) {
      if (isEven(numOfClass)) {
        element.classList.add("even")
      } else {
        element.classList.add("odd")
      }
    } else {
      if (isOdd(numOfClass)) {
        element.classList.add("even")
      } else {
        element.classList.add("odd")
      }
    }
  }
}

addBlackAndWhite(boxes)
