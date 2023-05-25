const array1 = [1, 2, 4, 7, 9, 20];
const array2 = [1, true, false, 4, 3, 10, 20, "string", NaN, undefined];

const isNumber = (num) => {
  if (typeof num === "number" && !isNaN(num)) {
    return true;
  }
  return false;
}

const mediaAritmetica = (arr) => {
  let rez = 0;

  for (let el of arr) {
    if (isNumber(el)) {
      rez += el
    }
  }
  return rez;
}

const media = mediaAritmetica(array1);
const media2 = mediaAritmetica(array2);

// console.log("Rezultat",media2);




// Creaza un program care afiseaza primele 20 de numere din sirul lui Fibonacci

// Aici m-am inspirat de pe net, tot incercam sa le fac push in array-uri apoi sa ma folosesc de ele ca se le adun pana sa gasesc pe net si sa realizezca pot actualiza valoarea unei variabile


const fibonaciiNumbers = (num) => {

    if(typeof num !== "number"){
        return alert("Not a number")
    }

    let nums = [];

    let previous = 0;
    let next = 1;
    let calc;

    for (let i = 0; i <= num; i++) {
        calc = previous + next; // 0 + 1 = 1 || 1 + 1 = 2 || 1 + 2 = 3 || 2 + 3 = 5 || 3 + 5 = 8 ||
        previous = next; // 0 -> 1 || 1 -> 1 || 1 -> 2 || 1 -> 3 || 1 -> 5 ||
        next = calc; // 1 -> 1 || 1 -> 2 || 1 -> 3 || 1 -> 5 || 1 -> 8 ||

        console.log(calc);
        nums.push(calc);
        // console.log(
        //   `Calcul ${previous} + ${next} = ${
        //     previous + next
        //   } \n Previous -> ${previous} = ${next} \n Next -> ${next} = ${
        //     previous + next
        //   }`
        // )
    }

  return nums;
}

const rez = fibonaciiNumbers(20);

console.log(rez);


