export function validateUsername(usernameObj, value){
    let regex = /^[a-z0-9]{5,}$/
    if (regex.test(value)){
        usernameObj.style.border = '3px solid green';
        return true;
    }
    usernameObj.style.border = '3px solid red';
    return false;
}

export function validateEmail(emailObj, value){
    let regex  =/(?:[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (regex.test(value)){
        emailObj.style.border = '3px solid green';
        return true;
    }
    emailObj.style.border = '3px solid red';
    return false;
}

function validateString(password){
    if (password.length > 8 && password.length < 72 && password.match(/[0123456789]/) && password.match(/[!@#$%^&*()_+\-=ˆ\[\]{};:'",.<>?~]/) && password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) && password.match(/[qwertyuiopasdfghjklzxcvbnm]/)){
        return true;
    }
    return false
}

export function validatePassword(passwordObj, confirmPasswordObj, passwordValue, confirmPasswordValue){
    if (validateString(passwordValue) && validateString(confirmPasswordValue)){
        passwordObj.style.border = '3px solid green';
        confirmPasswordObj.style.border = '3px solid green';
        return true
    }
    else{
        if (!validateString(passwordValue))
            passwordObj.style.border = '3px solid red';
        if (!validateString(confirmPasswordValue))
            confirmPasswordObj.style.border = '3px solid red';
        return false;
    }
}