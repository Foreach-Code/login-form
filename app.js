const inputUser = document.querySelector('.form-group:nth-child(1) input');
const inputMail = document.querySelector('.form-group:nth-child(2) input');
const inputPassword = document.querySelector('.form-group:nth-child(3) input');
const inputConfirm = document.querySelector('.form-group:nth-child(4) input');
const allImg = document.querySelectorAll('.icon-verif');
const allSpan = document.querySelectorAll('span');
const allLign = document.querySelectorAll('.lign div');

// User name
inputUser.addEventListener('input', (e) => {
    if(e.target.value.length >= 3) {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    } else {
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})

// User mail
inputMail.addEventListener('input', (e) => {
    const regexMail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexMail) === 0) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";
    } else if(e.target.value.search(regexMail) === -1) {
        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }
})

// Password
let inputValue;
const specialK = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const number = /[0-9]/;
let validation = {
    symbol: 0,
    letter: 0,
    number: 0
}

inputPassword.addEventListener('input', (e) => {
    inputValue = e.target.value;

    if(inputValue.search(specialK) !== -1) {
        validation.symbol = 1;
    }
    if(inputValue.search(alphabet) !== -1) {
        validation.letter = 1;
    }
    if(inputValue.search(number) !== -1) {
        validation.number = 1;
    }

    if(e.inputType = 'deleteContentBackward') {
        if(inputValue.search(specialK) === -1) {
            validation.symbol = 0;
        }
        if(inputValue.search(alphabet) === -1) {
            validation.letter = 0;
        }
        if(inputValue.search(number) === -1) {
            validation.number = 0;
        }
    }

    let validationAll = 0;
    for(const property in validation) {
        if(validation[property] > 0) {
            validationAll++;
        }
    }

    if(validationAll < 3) {
        allSpan[2].style.display = "inline";
        allImg[2].style.display ="inline";
        allImg[2].src = "ressources/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }

    if(inputValue.length <= 6 && inputValue.length > 0) {
        allLign[0].style.display = "block";
        allLign[1].style.display = "none";
        allLign[2].style.display = "none";
    } else if(inputValue.length <= 9 && inputValue.length > 6) {
        allLign[0].style.display = "block";
        allLign[1].style.display = "block";
        allLign[2].style.display = "none";
    } else if(inputValue.length > 9) {
        allLign[0].style.display = "block";
        allLign[1].style.display = "block";
        allLign[2].style.display = "block";
    } else if(inputValue.length === 0) {
        allLign[0].style.display = "none";
        allLign[1].style.display = "none";
        allLign[2].style.display = "none";
    } 
})

// Password confirm
inputConfirm.addEventListener('input', (e) => {
    if(e.target.value.length === 0) {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    } else if(e.target.value === inputValue) {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }
})


