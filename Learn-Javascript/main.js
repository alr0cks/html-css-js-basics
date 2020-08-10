let myForm = document.querySelector("#my-form");
let myName = document.querySelector("#name");
let myEmail = document.querySelector("#email");
let msg = document.querySelector(".msg");
let myList = document.querySelector("#users");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if (myName.value === "" || myEmail.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please add all fields";
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        
        console.log("success");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${myName.value} : ${myEmail.value}`));
        myList.appendChild(li);

        myName.value = '';
        myEmail.value = '';
    }
}