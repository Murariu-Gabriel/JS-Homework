const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing`

const secondSentence = `Andrei are un salariu de 1000 euro/luna un bonus de 9000 lei/an si mai castiga suplimentar aproximativ 500 usd/luna din freelancing`

const mockSentence = "Lucian are salar de 1000 de euro/luna un bonus de 10000 lei/an si castiga din freeelancing 3000 de lei/luna"

const mockSentence2 = "Maria are salar de 1000 de usd/luna un bonus de 10000 lei/an si castiga din freeelancing 3000 de lei/luna"

const mockSentence3 ="Darius are salar de 1000 de usd/luna un bonus de 10000 euro/an si castiga din freeelancing 3000 de usd/luna"

const EUR = 4.62
const USD = 4.95


const isStringMoney = (word) => word.includes("usd") || word.includes("euro") || word.includes("lei")

const calculTotal = (array) => {
  const salarAnual = array[0] * 12
  const bonus = array[1]
  const extra = array[2] * 12
  const castigAnual = salarAnual + bonus + extra

  return castigAnual
}

const convertMoney = (sum, moneyType) => {
    if(moneyType.includes("usd")){
      return sum * USD
    }
     if (moneyType.includes("euro")) {
       return sum * EUR
     }
     return sum
}

const computeIncome = (sentence) => {
  const splitSentence = sentence.split(" ")
  const stringNums = splitSentence.filter((el) => !isNaN(el))
  const parsedNums = stringNums.map((string) => parseInt(string))
  const name = splitSentence[0]
  
  
  const total = calculTotal(parsedNums)
 
  if (!splitSentence.includes("euro/luna") && !splitSentence.includes("usd/luna")) {
    return `Venitul anual al lui ${name} este de ${total}`
    
  } else {
    const moneyTypes = splitSentence.filter(el => isStringMoney(el))

    for(const [index, element] of moneyTypes.entries()){
       parsedNums[index] = convertMoney(parsedNums[index], element)
       console.log(element);
    }
    
    return `Venitul anual al lui ${name} este de ${calculTotal(parsedNums)}`
  }
  
}

const ionIncome = computeIncome(firstSentence)
const andreiIncome = computeIncome(secondSentence)
const lucianIncome = computeIncome(mockSentence)
const mariaIncome = computeIncome(mockSentence2)
const dariusIncome = computeIncome(mockSentence3)

console.log(ionIncome)
console.log(andreiIncome)
console.log(lucianIncome)
console.log(mariaIncome)
console.log(dariusIncome);

