let iconEye = document.querySelector("#eye");
let inputPassword = document.querySelector("#password");
let submit = document.querySelector('button')

let characterLength = document.querySelector("#characterLength");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let integer = document.querySelector("#integer");
let characterspecial = document.querySelector("#characterspecial");
let progressBar = document.querySelector(".progress-bar")


let characterLengthIsActive = false;
let uppercaseIsActive = false;
let lowercaseIsActive = false;
let integerIsActive = false;
let characterspecialIsActive = false;

/**
 * Icon and input type on click
 */
iconEye.addEventListener('click', () => {
    if (iconEye.classList[1] == "bi-eye") {
        styleBadge('bi-eye', 'bi-eye-slash', iconEye)
        inputPassword.type = "text";
    } else {
        styleBadge('bi-eye-slash', 'bi-eye', iconEye)
        inputPassword.type = "password";
    }
})

/**
 * Conditions password
 */
inputPassword.addEventListener('keyup', (e) => {
    lengthValue(8);
    uppercaseValue();
    integerValue();
    lowercaseValue();
    specialCharsValue()

    if (characterLengthIsActive && uppercaseIsActive && lowercaseIsActive && integerIsActive && characterspecialIsActive){
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }

})

/**
 * Lenght
 */
function lengthValue(number){
    if(inputPassword.value.length >= number){
        styleBadge('bg-danger', 'bg-success', characterLength)
        characterLengthIsActive = true;
    } else {
        styleBadge('bg-success', 'bg-danger', characterLength)
        characterLengthIsActive = false;
        
    }
}

/**
 * Uppercase
 */
function uppercaseValue(){
    if(/[A-Z]/.test(inputPassword.value)){
        styleBadge('bg-danger', 'bg-success', uppercase)
        uppercaseIsActive = true;
    } else {
        styleBadge('bg-success', 'bg-danger', uppercase)
        uppercaseIsActive = false;
    }
    
}

/**
 * Integer
 */
 function integerValue(){
    if(/[0-9]/.test(inputPassword.value)){
        styleBadge('bg-danger', 'bg-success', integer)
        integerIsActive = true;
    } else {
        styleBadge('bg-success', 'bg-danger', integer)
        integerIsActive = false;
    } 
}

/**
 * Lowercase
 */
 function lowercaseValue(){
    if(/[a-z]/.test(inputPassword.value)){
        styleBadge('bg-danger', 'bg-success', lowercase)
        lowercaseIsActive = true;
    } else {
        styleBadge('bg-success', 'bg-danger', lowercase)
        lowercaseIsActive = false;
    } 
}

/**
 * SpecialChars
 */
 function specialCharsValue(){
    if(/[.!@#$%^&*()_+-]/.test(inputPassword.value)){
        styleBadge('bg-danger', 'bg-success', characterspecial)
        characterspecialIsActive = true;
    } else {
        styleBadge('bg-success', 'bg-danger', characterspecial)
        characterspecialIsActive = false;
    } 
}

/** CSS Badge */
function styleBadge(remove, add, badge){
    badge.classList.remove(remove);
    badge.classList.add(add);
}

/**
 * Replace %
 */
function replacePourcent(el){
    el.replace('%', '');
}



