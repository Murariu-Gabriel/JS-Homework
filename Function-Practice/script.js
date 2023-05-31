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

// Aici m-am gandit sa ma joc putin cu high order functions chair daca puteam face altfel

const toFahrenheit  = (num) => {
 const calc = (num * 1.8 ) + 32
 return calc.toFixed(1)

}

const toCelsius = (num) => {
  const calc = (num - 32) / 1.8
 return  calc.toFixed(1)
}

const temperatureConverter = (temperature, funcConverter) => {

 return funcConverter(temperature)
}

const convert = temperatureConverter(18, toFahrenheit)

// console.log(convert)

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

// console.log(rez)

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


// 4 vocalele dintr-un sir de caractere
// Aici m-am luat dupa limba engleza
// On another note screw indexOf :)))))

const randomWords = "yesterday I had pie, it made my day"

const countVowels = (string) => {
  if (typeof string !== "string") {
    return "this is not a string"
  }

  const splitString = string.split(" ")

  let vowels = 0
  for (const word of splitString) {
    for (let i = 0; i < word.length; i++) {
      switch (word[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": {
          vowels++
          break
        }
        case "y": {
          if (word[i] === "y" && i === 0) {
            vowels++
            // console.log("Found y at beginning")
          }
        }
      }
    }
  }

  return vowels
}

const vowels = countVowels(randomWords)

// console.log(vowels)



                                    // PART 3


//1 

const password = `!p@$)(a:"-este_vali#a`

const passwordValidation = (string) => {
  if(string.length < 8){
    return "Password must have at least 8 characters"
  }

  const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]+/
  const hasSpecialChars = specialCharsRegex.test(string)

  if (!hasSpecialChars) {
    return "You need at least one special character"
  }

  return "Password is valid"
}

const validation = passwordValidation(password)

// console.log(validation)

// 2

const email = "ceva@gmail.com"

const emailValidation = (string) => {

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const isValidEmail = emailRegex.test(string)



  if(!isValidEmail){
    return "email is not valid"
  }

  return "email is valid"

}

const validation2 = emailValidation(email)

// console.log(validation2)

//3


 



                                
