
const userNamePattern = /\w{5,10}\d{2,5}/;
const emailPattern = /\w{3,20}(\.)?\w{2,20}@\w{5,10}\.\w{3}/;

let strongPassword = new RegExp('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')
let mediumPassword = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')


const userNameElm = document.querySelector('#userName')
const emailElm = document.querySelector('#email')
const userNameMsgElm = document.querySelector('.invalid-feedback-user-name')
const emailMsgElm = document.querySelector('.invalid-feedback-email')


const passElm = document.querySelector('#password')
const passwordMsgElm = document.querySelector('.invalid-feedback-password')

const confirmPassElm = document.querySelector('#confirm-pass')
const confirmPassMsgElm = document.querySelector('.invalid-feedback-confirm-pass')


const sbtElm = document.querySelector('#submitButton');

userNameElm.addEventListener('input', userName);
emailElm.addEventListener('input', email);
passElm.addEventListener('input', password);
confirmPassElm.addEventListener('input', confirmPass);



function email() {
    let email = emailElm.value
    let regexEmail = emailPattern.test(email)

    if (email === "") {
        emailMsgElm.innerHTML = "<span>Please Enter Email</span>"
    } else if (regexEmail === true) {
        emailMsgElm.innerText = ""
    } else if (regexEmail !== true) {
        emailMsgElm.innerHTML = "<span>Enter Valid Email</span>";
    }
}

function userName() {
    let userName = userNameElm.value
    let regexUserNameEmail = userNamePattern.test(userName)

    if (userName === "") {
        userNameMsgElm.innerHTML = "<span>Please Enter a User Name</span>"
    } else if (regexUserNameEmail === true) {
        userNameMsgElm.innerText = ""
    } else if (regexUserNameEmail !== true) {
        userNameMsgElm.innerHTML = "<span>Enter a User Name with Letter and Password</span>";
    }
}

function email() {
    let email = emailElm.value
    let regexEmail = emailPattern.test(email)

    if (email === "") {
        emailMsgElm.innerHTML = "<span>Please Enter Email</span>"
    } else if (regexEmail === true) {
        emailMsgElm.innerText = ""
    } else if (regexEmail !== true) {
        emailMsgElm.innerHTML = "<span>Enter Valid Email</span>";
    }
}


function password() {
    let password = passElm.value
    let regexStrongPass = strongPassword.test(password)
    let regexMediumPass = mediumPassword.test(password)

    if (password === "") {
        passwordMsgElm.innerHTML = "<span>Please Enter Password</span>"
    } else if (regexStrongPass === true) {
        passwordMsgElm.innerHTML = "<span>Strong Password</span>"
    } else {
        passwordMsgElm.innerHTML = "<span>Weak Password</span>"
    }
}


function confirmPass() {
    let confirmPass = confirmPassElm.value

    if (confirmPass === "") {
        confirmPassMsgElm.innerHTML = "<span>Please Confirm Password</span>"
    } else if (confirmPass === passElm.value) {
        confirmPassMsgElm.innerHTML = ""
    } else {
        confirmPassMsgElm.innerHTML = "<span>Password Doesn't Match</span>";
    }
}