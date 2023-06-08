const form = document.getElementById("form")
const list = document.getElementById("list")
// const submitBtn = document.getElementById("submitBtn");
const formButton = document.body.querySelector("form button")
const input = document.getElementById("add-item")
const errorMsg = document.querySelector("form span")

window.addEventListener("load", () => {
//   loadItems()
loadItems()
})

// addAllFunctionality
// localStorage.clear()

// ceva nu e in regula cu git

// Trebuie sa iti dai seama dece isi schimba locatia elementele din local storage
const getElementsFromStorage = () => {
    const elements = []
    for (let i = 0; i < localStorage.length; i++) {
        const storageKey = localStorage.key(i)
        console.log(localStorage.key(0))
           if (storageKey !== "debug") {
               const value = localStorage.getItem(localStorage.key(i))
               console.log(value)
             elements.push(value)
           }
    }
    console.log(elements)
    return elements
}

const addElementsFromStorageToList = (elements) => {
const convertToString = elements.toString()
const removeCommas = convertToString.replaceAll(",", "")
list.innerHTML = removeCommas
}

const reloadFunctionalityOfList = () => {
    const children = list.children
    for(const child of children){
         addAllFunctionality(child)
    }
}


const loadItems = () => {

 const elements = getElementsFromStorage()    
    addElementsFromStorageToList(elements)
    reloadFunctionalityOfList()
  console.log(elements)
  
}



const addItemToLocalStorage = (inputValue, func) => {
  const funcResult = func(inputValue)
  const html = funcResult.outerHTML
  localStorage.setItem(inputValue, html)
}

const removeItemToLocalStorage = (key) => {
  localStorage.removeItem(key)
}

const ifExistsInList = (input) => {
  const children = list.children

  for (const child of children) {
    const item = child.textContent
    if (item === input) {
      return false
    }
  }
  return true
}

const loadListElement2 = (value) => {
  const newLi = list.appendChild(createLi(value))
  addAllFunctionality(newLi)

}

const loadListElement = (value) => {
  const newLi = list.appendChild(createLi(value))
  addAllFunctionality(newLi)
  addItemToLocalStorage(value, createLi)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (
    input.value.length !== 0 &&
    input.value.length < 22 &&
    ifExistsInList(input.value)
  ) {
    errorMsg.innerText = ""
    const inputValue = input.value
    loadListElement(inputValue)
    input.value = ""

  } else {
    if (input.value.length > 22) {
      errorMsg.innerText = "Item too long"
    } else if (!ifExistsInList(input.value)) {
      errorMsg.innerText = "Please add another item to your list"
    } else {
      errorMsg.innerText = "Please add an item to your list"
    }
  }

  if (list.children.length === 10) {
    formButton.classList.add("disabled")
  }
})

const createDeleteBtn = () => {
  const deleteBtn = document.createElement("button")
  deleteBtn.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"></path></svg>`
  return deleteBtn
}

const addCheckedFunctionality = (element) => {
  const struck = () => {
    element.addEventListener("click", () => {
      element.classList.toggle("struck")
    })
  }

  struck()
}

// Aici sunt curios daca am implementat bine stergerea event-ului

// In acelasi timp daca sterg parintele cu totul mai este nevoie sa sterg si event-ul?

const buttonDeleteFunctionality = (button) => {
  const deleteFunc = () => {
    button.addEventListener("click", () => {
      button.parentElement.remove()

      if (list.children.length < 10) {
        formButton.classList.remove("disabled")
      }

      const liInnerText = button.parentElement.innerText
      removeItemToLocalStorage(liInnerText)
    })
  }
  deleteFunc()

  button.removeEventListener("click", deleteFunc())
}

const createLi = (value) => {
  const listEl = document.createElement("li")
  listEl.innerText = value

  listEl.appendChild(createDeleteBtn())

  return listEl
}

const addAllFunctionality = (element) => {
  const button = element.children[0]
  buttonDeleteFunctionality(button)

  addCheckedFunctionality(element)
}

// localStorage.clear()

// In case I want to fool with local storage through object again

// console.log(localStorage.getItem(localStorage.key(0)))

// list.appendChild(localStorage.getItem(localStorage.key(0)))

// const addToLocalStorage = (elements) => {
//     const convertedElements = JSON.stringify(elements)
//     localStorage.setItem("items", convertedElements)
// }

// const addItemInObj = (inputValue, value) => {
//     items.push(inputValue = {[inputValue]: inputValue})
//     console.log(items)
//     // items
// }

// const deleteItemInObj = (key) => {
//     delete items[key]
// }


// In case you want to go back to old loading without making full use of local storage

// const loadItems = () => {
//   for (let i = 0; i < localStorage.length; i++) {
//     const storageKey = localStorage.key(i)
//     if (storageKey !== "debug") {
//       const value = localStorage.key(i)
//       loadListElement2(value)
//     }
//   }
// }