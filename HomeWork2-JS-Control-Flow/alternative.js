const form = document.getElementById("form")
const section = document.getElementById("section")
const vehicle = document.getElementById("vehicle")
const capacity = document.getElementById("capacity")
const resultContainer = document.getElementById("result-container")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  resultContainer.innerText = `Ai de platit ${functionality(
    vehicle.value,
    capacity.value
  )}`
  console.log(functionality(vehicle.value, capacity.value))
})

const functionality = (vehicul, capacitate) => {
  const cm3Division = capacitate / 200

  // Nu cred ca else-urile sau userShielding-ul are vre-o folosinta aici dar le-am lasat
  // Din moment ce fac return pt functie nu mai am nevoie de break aparent
  if (!vehicul || !capacitate) return "aceasta capacitate nu exista"

  switch (vehicul) {
    case "motocicleta":
    case "cvadriclu":
    case "triciclu": {
      if (capacitate <= 1600) {
        return `${Math.floor(cm3Division * 8)} lei`
      } else if (capacitate > 1600) {
        return `${Math.floor(cm3Division * 9)} lei`
      }

      //   break
    }
    case "autoturism": {
      if (capacitate <= 1600) {
        return `${Math.floor(cm3Division * 8)} lei`
      } else if (capacitate > 1600 && capacitate <= 2000) {
        return `${Math.floor(cm3Division * 22)} lei`
      } else if (capacitate > 2001 && capacitate <= 2600) {
        return `${Math.floor(cm3Division * 85)} lei`
      } else if (capacitate > 2601 && capacitate <= 3000) {
        return `${Math.floor(cm3Division * 171)} lei`
      } else if (capacitate > 3001) {
        return `${Math.floor(cm3Division * 345)} lei`
      }
      //   break
    }

    case "autobuz":
    case "autocar":
    case "microbuz": {
      return `${Math.floor(cm3Division * 28)} lei`
      //   break
    }
    case "tractor": {
      return `${Math.floor(cm3Division * 22)} lei`
      //   break
    }
    case "camion": {
      return `${Math.floor(cm3Division * 34)} lei`
      //   break
    }
    default: {
      console.log("Nu ai introdus nimic")
    }
  }

  return "Nu ai introdus parametrii la functie"
}
