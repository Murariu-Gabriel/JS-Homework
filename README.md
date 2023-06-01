## HOF .every()

.every() Verifica daca toate elementele sunt similare intr-un aspect si returneaza boolean

```Js
const array = [1, 2, 3, 4, 5, "string"]

const numbersTrue = array.every(el => typeof el === "number")

console.log(numbersTrue) //false
```

## Cand se scrie o functie separat sau itr-un high order function

- Daca nu refolosim o functie putem sa o scriem inauntr-ul HOF-ului

- Daca vrem sa refolosim functia trebuie sa o definim inafara acestuia