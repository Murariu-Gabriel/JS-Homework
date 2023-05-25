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