const initialValues = [NaN, null, undefined, "string", 1, false]

const otherValues = [
  undefined,
  null,
  1,
  false,
  "string",
  ["tema", false],
  true,
  10,
]



                                    // TEMA JS ARRAY

initialValues.push(otherValues[0])
initialValues.push(otherValues[1])
initialValues.push(otherValues[2])
initialValues.push(otherValues[3])
initialValues.push(otherValues[4])
initialValues.push(otherValues[5])
initialValues.push(otherValues[6])
initialValues.push(otherValues[otherValues.length - 1])

const adunare = initialValues[4] + initialValues[initialValues.length - 1]
const scadere = initialValues[initialValues.length - 1] - 5

initialValues[initialValues.length - 1] = scadere
initialValues[4] = adunare

initialValues[3] = initialValues[3] + " HappyCoding"
initialValues[10] = initialValues[10] + " HappyCoding"
initialValues[11][0] = initialValues[11][0] + " HappyCoding"

initialValues[11][1] = !initialValues[11][1]
initialValues[5] = !initialValues[5]
initialValues[9] = !initialValues[9]
initialValues[12] = !initialValues[12]

console.log(initialValues)


                                    // ALTE INCERCARI

                                    // REGULAR FOR

// for(let i = 0; i < otherValues.length; i++){
//   initialValues.push(otherValues[i])
// }

// for (let i = 0; i < initialValues.length; i++) {
//   if (typeof initialValues[i] === "number") {
//     initialValues[i] = initialValues[i] + 2
//   }

//   if (typeof initialValues[i] === "string") {
//     initialValues[i] = initialValues[i] + " happy coding"
//    }

//   if (typeof initialValues[i] === "boolean") {
//     initialValues[i] = !initialValues[i]
//   }

//   if (typeof initialValues[i] === "object" && initialValues[i] != null) {
//     for(let j = 0; j < initialValues[i].length; j++){
//       if(typeof initialValues[i][j] === "boolean"){
//         initialValues[i][j] = !initialValues[i][j]
//       }
//       if (typeof initialValues[i][j] === "boolean") {
//         initialValues[i][j] = !initialValues[i][j]
//       }if(typeof initialValues[i][j] === "string"){
//         initialValues[i][j] = initialValues[i][j] + " happy coding"
//       }
//     }
//   }
// }

// console.log(initialValues)


                                  // FOR OF

// for (let element of otherValues) {
//   initialValues.push(element)
// }

// console.log("Before \n", initialValues)

// for (const [index, element] of initialValues.entries()) {
//   if (typeof element === "number") {
//     initialValues[index] = element + 2
//   }

//   if (typeof element === "string") {
//     initialValues[index] = element + " happy coding"
//   }

//   if (typeof element === "boolean") {
//     initialValues[index] = !element
//   }

// // Nu stiu de unde am nascocit aceasta incercare de for in for. Acum chiar ma intreb daca e ok

//   if (typeof element === "object" && element != null) {
//     for (const [i, el] of element.entries()) {
//       if (typeof el === "string") {
//         element[i] = el + " happy conding"
//       }
//       if (typeof el === "boolean") {
//         element[i] = !el
//       }
//     }
//   }
// }

// console.log(`After \n`, initialValues)

