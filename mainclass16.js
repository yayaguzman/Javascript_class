

let allContacts = [];

function saveContact() {//button add contact
  //DOM EVENTS
  let firstName = document.getElementById("firstnameInput").value;
  let lastName = document.getElementById("lastnameInput").value;
  let emailContact = document.getElementById("emailInput").value;

  let newContact = {
    firstName: firstName,
    lastName: lastName,
    emailContact: emailContact
  }

  allContacts.push(newContact);
  showMeContacts();
  saveContactToLocalStorage() 
  

}
//(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
function showMeContacts(){
  let contactList = document.getElementById("contactsListSaved") //List ID in the html
  
  contactList.innerHTML = "";

  for (let i = 0; i < allContacts.length; i++) {
    let oneContact = allContacts[i]
    let createContactRow = document.createElement("li");
    createContactRow.innerHTML = "First name: " + oneContact.firstName + "   " + "Last name: " + oneContact.lastName + "   " + "Email: " +  oneContact.emailContact + "   "; 
    //+ `<a href="#" id = "btndelete" > Delete </a>`;
    contactList.appendChild(createContactRow);//creates the "li" inside (let contactList)"ul" with ID "contactsListSaved"
  }

  

    document.getElementById("firstnameInput").value = ""; // This clears input field after submit
    document.getElementById("lastnameInput").value = ""; // This clears input field after submit
    document.getElementById("emailInput").value = ""; // This clears input field after submit
}
console.log(allContacts);

// createContactRow.innerHTML = "First name: " + oneContact.firstName + "   " + "Last name: " + oneContact.lastName + "   " + "Email: " +  oneContact.emailContact + "   " 

let LOCAL_STORAGE_KEY = 'addressBookContacts';
//Local storage - allows that the contacts remain in the page after refreshing the page
function saveContactToLocalStorage() {
    let contactsAsJsonString = JSON.stringify(allContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, contactsAsJsonString);
    //let backToJson = JSON.parse(myValueContact);
    //console.log(backToJson.firstName); 
}

function loadContacts() {
    let savedContactsAsJsonString = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContactsAsJsonString !==null) {
      allContacts = JSON.parse(savedContactsAsJsonString);
    }
}

loadContacts() ;

