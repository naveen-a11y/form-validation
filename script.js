function clearErrors() {
    errors = document.getElementsByClassName("formerror");
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();
    let name = document.forms["myForm"]["name"].value;

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (email.length > 25) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    let phone = document.forms["myForm"]["phone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    let password = document.forms["myForm"]["pass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    let city = document.forms["myForm"]["city"];
    if (city.selectedIndex < 1) {
        seterror("city", "*Please select a city");
        returnval = false;
    }

    return returnval;
}
