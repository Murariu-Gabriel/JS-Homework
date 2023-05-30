// PART 1

//3 returnarea celui mai mic dintre numere

const smallestNum = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number" || num1 === num2) {
    return "One of them is not a number or they are equal"
  }

  return num1 < num2 ? `Smalest number is ${num1}` : `Smalest number is ${num2}`
}

const test = smallestNum(100, 100)
// console.log(test)

//5 de cate ori apare un caracter intr-un sir
// Aici am trecut prin string asa deoarece este mai usor de scris. Ar trebuii sa fac un for normal in general?
// Aici nu am vrut sa primeasca numere

const countLetter = (string, letter) => {
  //   if (
  //     typeof string !== "string" ||
  //     typeof letter !== "string" ||
  //     !isNaN(letter)
  //   ) {
  //     return "This is not a word"
  //   }

  // Sunt putin dezorientat de ce am scris aici but it works

  switch (true) {
    case typeof string !== "string":
    case typeof letter !== "string":
    case !isNaN(letter): {
      return "This is not a word"
    }
  }

  const verifiedLetter = letter.toLowerCase()

  let count = 0
  for (el of string) {
    if (el === verifiedLetter) {
      count++
    }
  }

  return `Letter "${verifiedLetter}" appears in the word "${string}" ${count} times`
}

const letterCountOfo = countLetter(
  "pneumonoultramicroscopicsilicovolcaniconioza",
  1
)

// console.log(letterCountOfo);

// PART 2

//1 convertor de temperatura

const temperatureConverter = (grade, temperature) => {}

//2

const isPalindrom = (num) => {
  if (typeof num !== "number") {
    return "this is not a number"
  }

  // Presupun ca nu ar trebuii sa scriu codul asa :))
  // const reverse = Number(num.toString().split("").reverse().join(""));

  // Asa ca il sparg
  const stringNum = num.toString()
  const splitNum = stringNum.split("")
  const reversedNum = splitNum.reverse()
  const joinedNum = reversedNum.join("")
  const stringToNumber = Number(joinedNum)

  return num === stringToNumber
    ? `${num} este Palindrom`
    : `${num} nu este Palindrom`
}

const rez = isPalindrom(32223)

console.log(rez)

//3 string to upperCase

const wiseWords = "Some time ago a wise man said... idk, something wise?"

const upperCaseString = (string) => {
  if (typeof string !== "string") {
    return "this is not a string"
  }

  const splitString = string.split(" ")

  for (const [index, el] of splitString.entries()) {
    const firstLetter = el[0].toUpperCase()
    const restOfTheWord = el.slice(1, el.length)

    splitString[index] = firstLetter + restOfTheWord
  }

  const joinedArray = splitString.join(" ")

  return joinedArray
}

const up = upperCaseString(wiseWords)

// console.log(up)
