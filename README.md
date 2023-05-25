## Despre NaN si verificarea acestuia

- NaN nu este egal cu el insusi

```Js
console.log(NaN === NaN) // False
```

- NaN are o are deja o functie predefinita pentru a verifica daca un element este NaN

```Js
const element = "2asda"
console.log(isNaN(element)) // true
```

- NaN este de tip numar

```Js
console.log(typeof NaN) // number
```

## Poti schimba valori intre ele folosindu-te de variabile

- Prin variable swap

```Js

let a = 1
let b = 2
let temp;

console.log(a, b) // Before 1, 2

temp = a
a = b
b = temp

console.log(a, b) // After 2, 1

```

- Prin destructuring

```Js
let a = 1
let b = 2

console.log(a, b); // Before 1, 2

[a, b] = [b, a]

console.log(a, b); // After 2, 1
```

## Un caz clar in care am nevoie de semicolon

- Daca nu as avea punct si virgula la console.log atunci js va incerca sa ruleze acele doua linii de cod pe una singura

```Js
console.log(a, b); <---

[a, b] = [b, a]
```

- Acesta va da o eroare de undifined deoarece incearca sa seteze valoarea unu element care nu exista

```Js
console.log(a, b)[a, b] = [b, a]
```


