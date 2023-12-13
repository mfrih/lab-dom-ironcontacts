// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random")
const tableBody = document.querySelector("tbody#contacts")

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length)
const splicedArr = contacts.splice(randomIndex, 1)

// Get the element from the spliced array
const randomContact = splicedArr[0]

const exampleRow = document.createElement("tr")
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`
const myDeleteButton = exampleRow.querySelector(".btn-delete")
myDeleteButton.addEventListener("click", deleteContact)

tableBody.appendChild(exampleRow)

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3)

addthreeContacts()

function addthreeContacts(event) {
  threeContacts.forEach((element) => {
    const rowByContact = document.createElement("tr")

    rowByContact.innerHTML = `
    
  <td>
  <img src="${element.pictureUrl}" />
</td>
<td> ${element.name} </td>
<td> ${element.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
</td>
  `
    const myDeleteButton = rowByContact.querySelector(".btn-delete")
    myDeleteButton.addEventListener("click", deleteContact)
    tableBody.append(rowByContact)
  })
}

// ITERATION 2 - Delete Buttons

function deleteContact(event) {
  event.target.closest("tr").remove()
}

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
