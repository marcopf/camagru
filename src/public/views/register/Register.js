import Aview from '/public/js/AbstractView.js'
import register from '/public/API/registration.js'
import * as validator from '/public/views/register/validate.js'
import sha256 from '/public/js/sha256.js';

export default class extends Aview{
    constructor(){
        super();

    }

    getHtml(){
        return `
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-8 col-lg-6 rounded-3 shadow mt-4 p-4">
                    <h2>Register</h2>
                    <div class="row c-form">
                        <div class="col-12 col-lg-6 mt-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" id="username" name="username" class="form-control" value="mpaterno" aria-describedby="username">
                        </div>
                        <div class="col-12 col-lg-6 mt-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-control" value="mpaterno@test.it" aria-describedby="email">
                        </div>
                        <div class="col-12 col-lg-6 mt-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" id="password" class="form-control" value="mpaterno7M?" aria-describedby="passwordHelpBlock">
                            <div id="passwordHelpBlock" class="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" class="form-control" value="mpaterno7M?" aria-describedby="passwordHelpBlock">
                            <div id="passwordHelpBlock" class="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex align-items-center mt-5">
                        <div class="col-10 col-md-8">
                            <span>Already registered?</span>
                            <a href="/login" data-link class="m-2 btn btn-outline-primary">Login</a>
                        </div>
                        <div class="col-2 col-md-4 d-flex justify-content-end">
                            <button id="register-submit" class="btn btn-success">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    onInit(){
        let cForm = document.querySelector(".c-form");
        let inputs = cForm.querySelectorAll("input");
        let inputToValidate = document.querySelectorAll('.form-control');
        let formObj = {};

        document.querySelector("#register-submit").addEventListener("click", ()=>{
            inputs.forEach(el=>{
                formObj[el.name] = el.value;
            })
            if (!validator.validateUsername(inputToValidate[0], inputToValidate[0].value) || !validator.validateEmail(inputToValidate[1], inputToValidate[1].value) || !validator.validatePassword(inputToValidate[2], inputToValidate[3], inputToValidate[2].value, inputToValidate[3].value)){
                return ;
            }
            formObj.password = sha256(formObj.password)
            delete formObj.confirmPassword;
            register(formObj).then(el=>{
                if (el){
                    console.log('richiesta accettata')
                }
            })
        })
    }
    onDestroy(){
        console.log("distruggo Register")
    }
}