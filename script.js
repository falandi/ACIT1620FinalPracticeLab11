const uniqueIndex = document.querySelector(".main")
const uniqueView = document.querySelector(".main")
const uniqueCreate = document.querySelector(".main")
let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    },
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]
  let Contact = contactList[0]


  function cleanUpIndex () {


    while(uniqueIndex.lastChild){
        uniqueIndex.lastChild.remove()
    }

}

    
function createSingleIndex(Contact) {

document.querySelectorAll("main").addEventListener("click", e=>{
for(let i = 0; i < contactList.length; i++)
    if(contactList.name = Contact.name){
      cleanUpIndex()
      renderView(Contact)
    }

  

})
  let singleIndexa = document.createElement('a')
  singleIndexa.href ="page3.html"
  
  let singleIndexdiv = document.createElement('div')
      singleIndexdiv.classList.add("contact")
      

  let singleIndexp = document.createElement('p')
      singleIndexp.textContent = Contact.name
   
      singleIndexa.append(singleIndexdiv)
      singleIndexdiv.append(singleIndexp)
  
  
  return singleIndexa
 }

function renderIndex(contactList) {

  for (let i = 0; i < contactList.length; i++){
      let newContact = createSingleIndex(contactList[i])

  uniqueIndex.appendChild(newContact)
  }

  return contactList

}


function cleanUpView(){

  while(uniqueView.lastChild){
      uniqueView.lastChild.remove()
      
  }

}

function renderView(Contact){

  let contactinfoDiv = document.createElement('div')
      contactinfoDiv.classList.add("contactinfo")
  
  let contactnameDiv = document.createElement('div')
      contactnameDiv.classList.add("contactname")
      contactnameDiv.textContent = Contact.name
  
       
  let profileImg = document.createElement('img')
      profileImg.src = "./img/profile.jpg" 
      profileImg.classList.add("profilepic")
  
  
  let emailDiv = document.createElement('div')
      emailDiv.classList.add("contactemail")
      emailDiv.textContent = `${"email: "}${Contact.email}`
  
  let phoneDiv = document.createElement('div')
      phoneDiv.classList.add("contactphone")
      phoneDiv.textContent = `${"phone: +1 "}${Contact.phone}`
  
  let  addressDiv = document.createElement('div')
      addressDiv.classList.add("contactaddress")
      addressDiv.textContent = `${"address: "}${Contact.address}`
  
  let buttonDiv = document.createElement('div')
      buttonDiv.classList.add("buttons")
  
  let editButton = document.createElement('button')
      editButton.classList.add("button", "edit")
      editButton.value = "Edit"
      editButton.textContent = "Edit"
      
  
  let closeButton = document.createElement('button')
      closeButton .classList.add("button","close")
      closeButton.value = "Close"
      closeButton.textContent = "Close"
  
  uniqueView.appendChild(contactinfoDiv)
  contactinfoDiv.appendChild(contactnameDiv)
  contactnameDiv.appendChild(profileImg)
  contactinfoDiv.appendChild(emailDiv)
  contactinfoDiv.appendChild(phoneDiv)
  contactinfoDiv.appendChild(addressDiv)
  contactinfoDiv.appendChild(buttonDiv)
  buttonDiv.appendChild(editButton)
  buttonDiv.appendChild(closeButton)
  
  return uniqueView
  
  }

  function cleanUpCreate(){

    
    while(uniqueCreate.lastChild){
        uniqueCreate.lastChild.remove()

}
}
    
function renderCreate(){

let editDiv = document.createElement('div')
    editDiv.classList.add("contactedit")

let imgDiv = document.createElement('div')
    imgDiv.classList.add("contactimg")

let profileImg = document.createElement('img')
    profileImg.src = "./img/profile.jpg" 
    profileImg.alt ="Profile Picture"
    profileImg.classList.add("profilepic")

let formDiv = document.createElement('div')
    formDiv.classList.add("form")

let formDOM = document.createElement('form')

let containerDiv = document.createElement('div')
    containerDiv.classList.add("inputcontainer")

let nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.id  = "contactname"
    nameInput.name = "contactname"    
    nameInput.placeholder = "Contact Name"

let buttonName = document.createElement('button')
    buttonName.classList.add("extrafield")
    buttonName.id = "extranamefield"
    buttonName.name = "extranamefield"
    buttonName.textContent ="+"
    
let containerDiv2 = document.createElement('div')
    containerDiv2.classList.add("inputcontainer")

let phoneInput = document.createElement('input')
    phoneInput.type = "tel"
    phoneInput.id  = "contactphone"
    phoneInput.name = "contactphone"    
    phoneInput.placeholder = "Contact phone"

let buttonPhone = document.createElement('button')
    buttonPhone.classList.add("extrafield")
    buttonPhone.id = "extraphonefield"
    buttonPhone.name = "extrafieldphone"
    buttonPhone.textContent = "+"

let containerDiv3 = document.createElement('div')
    containerDiv3.classList.add("inputcontainer")

let addressInput = document.createElement('input')
    addressInput.type = "text"
    addressInput.id  = "contactaddress"
    addressInput.name = "contactaddress"    
    addressInput.placeholder = "Contact Address"

let buttonAddress = document.createElement('button')
    buttonAddress.classList.add("extrafield")
    buttonAddress.id = "extraaddressfield"
    buttonAddress.name = "extraaddressfield"
    buttonAddress.textContent = "+"

    let containerDiv4 = document.createElement('div')
    containerDiv4.classList.add("inputcontainer")

let emailInput = document.createElement('input')
    emailInput.type = "email"
    emailInput.id  = "contactemail"
    emailInput.name = "contactemail"    
    emailInput.placeholder = "Contact Email"

let buttonEmail = document.createElement('button')
    buttonEmail.classList.add("extrafield")
    buttonEmail.id = "extraemailfield"
    buttonEmail.name = "extraemailfield"
    buttonEmail.textContent = "+"

let buttonDiv = document.createElement('div')
    buttonDiv.classList.add("buttons")

let saveButton = document.createElement('button')
    saveButton.classList.add("button","save")
    saveButton.id = "savecontact"
    saveButton.name ="savecontact"
    saveButton.textContent = "Save Contact"

let cancelButton = document.createElement('button')
    cancelButton.classList.add("button","cancel")
    cancelButton.id = "cancel"
    cancelButton.name ="cancel"
    cancelButton.textContent = "Cancel"



    uniqueCreate.appendChild(editDiv)
    editDiv.appendChild(imgDiv)
    editDiv.appendChild(formDiv)
    formDiv.appendChild(formDOM)
    imgDiv.appendChild(profileImg)
    formDOM.appendChild(containerDiv)
    containerDiv.appendChild(nameInput)
    containerDiv.appendChild(buttonName)
    formDOM.appendChild(containerDiv2)
    containerDiv2.appendChild(phoneInput)
    containerDiv2.appendChild(buttonPhone)
    formDOM.appendChild(containerDiv3)
    containerDiv3.appendChild(addressInput)
    containerDiv3.appendChild(buttonAddress)
    formDOM.appendChild(containerDiv4)
    containerDiv4.appendChild(emailInput)
    containerDiv4.appendChild(buttonEmail)
    formDOM.appendChild(buttonDiv)
    buttonDiv.appendChild(saveButton)
    buttonDiv.appendChild(cancelButton)


    return uniqueCreate
}


document.getElementById("contactshome").addEventListener("click", e=> {
  cleanUpIndex()
  renderIndex(contactList)
  e.preventDefault()

})

document.getElementById("newcontact").addEventListener("click", e=>{
  cleanUpCreate()
  renderCreate(contactList)
  e.preventDefault()

})
  


