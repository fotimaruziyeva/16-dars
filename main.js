// let object={
//     firstname:'Aziza',
//     lastName:'ogabek',
//     Fullname:function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(object.Fullname());
// const person={
//     fullname:function(){
//          return this.firstname + "  " + this.lastName;
//         }
// }
// const person1={
//     firstname:'Aziza',
//    lastName:"Developer",
// }
// const person2={
//     firstname:'Aziza',
//     lastName:"Design",
// }

//  let btn=document.getElementById("btn")

// const person={
//     fullname:function(locaticon,job){
//          return this.firstname + "  " + this.lastName + locaticon  +","+job;
//     }  
// }
// const person1={
//     firstname:prompt("Ismingizni kiriting: "),
//     lastName:prompt("Familiyangizni kiriting: ")
// }
// const person2={
// btn:onclick=function(e){
// btn.style.display='block'
// }
// }
 //document.getElementById("txt").innerHTML=person.fullname.call(person1,"Uzbekistan" , "Developer")

 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            showModal('Success! Form submitted.');
        } else {
            showModal('Error! Please fill in all fields.');
        }
    });

    closeButton.addEventListener('click', function () {
        closeModal();
    });

    function validateForm() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        return username !== '' && password !== '';
    }

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = 'block';
    }
    function loadedForm(e) {
        window.onload(e)
    }

    function closeModal() {
        modal.style.display = 'none';
        location.reload()

    }
});


