// script.js
function validateForm() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("add").value;


    // if (city === "") {
    //     alert("enter the city");
    //     return false;
    // }

    // const phonePattern = /^[0-9]{10}$/;
    // if (!phone.match(phonePattern)) {
    //     alert("enter the valid number");
    //     return false;
    // }

    // if (add === "") {

    //     alert("enter the address");
    //     return false;
    // }

    alert("completed successfully");

    return true; 
}