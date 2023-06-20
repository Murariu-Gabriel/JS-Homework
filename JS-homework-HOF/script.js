const array = [2, 4, 6, 8]

//1
const numbersTrue = array.every((el) => el % 2 === 0)
// console.log(numbersTrue)

//2
// const displayNumbers = array.forEach(element => console.log(element))

//3

// const sumOfNums = array.reduce((accumulator, current) => accumulator + current, 0 )

const array2 = ["da", 2, 4, "string", 6]

const sumOfNums2 = array2.reduce((accumulator, current) => {
  if (typeof current !== "number") {
    current = 0
  }
  if (typeof accumulator !== "number") {
    accumulator = 0
  }

  return accumulator + current
}, 0)
// Aici presupun ca asa se adauga cel initial

// console.log(sumOfNums2)

//Exercitii find

//1

const numbers = [2, 3, 5, 6, 9, 8, 10]

const findGreaterThan8 = numbers.find((number) => number > 8)
// console.log(findGreaterThan8)

//2

const isPerfectSquare = (num) => {
  const division = Math.sqrt(num)
  if (num % division !== 0) {
    return false
  }

  return true
}

const findFirstSquarePerfect = (array) => {
  return array.find((el) => isPerfectSquare(el))
}

const firstSquarePerfectOfArray = findFirstSquarePerfect(numbers)

console.log(firstSquarePerfectOfArray)

//3

const array4 = [3, 5, 7, 9, 4]

const wordArray = ["ceva", "altceva", "potop", "somthing", "somethings"]

const isWord4Letters = (word) => {
  return word.length === 4
}

const isPalindrom = (string) => {
  if (typeof string !== "string") {
    return false
  }

  const stringString = string.toString()
  const splitString = stringString.split("")
  const reversedString = splitString.reverse()
  const joinedString = reversedString.join("")


  return string === joinedString
}



const findFunction = (array, func) => {
  for (const element of array) {
    if (func(element)) {
      return element
    }
  }

  return "Your array doesn't contain what you're looking for"
}

const findFirstPerfSquare = findFunction(array4, isPerfectSquare)
const findFirst4LetterWord = findFunction(wordArray, isWord4Letters)
const isWordPalindrom = findFunction(wordArray, isPalindrom)


console.log(findFirstPerfSquare)
console.log(findFirst4LetterWord)
console.log(isWordPalindrom)