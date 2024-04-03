import Aview from '/public/js/AbstractView.js'
import login from '/public/API/login.js'
import sha256 from '/public/js/sha256.js';
import Router from "/public/js/mainRouterFunc.js"

export default class extends Aview{
    constructor(){
        super();

    }

    getHtml(){
        return `
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-8 col-lg-6 rounded-3 shadow mt-4 p-4">
                    <h2>Login</h2>
                    <div class="row c-form">
                        <div class="col">
                            <label for="username" class="form-label">Username</label>
                                <input type="text" id="username" name="username" class="form-control" aria-describedby="username">
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" name="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                            <div id="passwordHelpBlock" class="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex align-items-center mt-5">
                        <div class="col-10 col-md-8">
                            <span>not yet registered?</span>
                            <a href="/register" data-link class="m-2 btn btn-outline-primary">Register</a>
                        </div>
                        <div class="col-2 col-md-4 d-flex justify-content-end">
                            <button id="login-submit" class="btn btn-success">LOGIN</button>
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
        let formObj = {};

        document.querySelector("#login-submit").addEventListener("click", ()=>{
            inputs.forEach(el=>{
                formObj[el.name] = el.value;
            })
            formObj.password = sha256(formObj.password)
            login(formObj).then(res=>{
                if (res){
                    localStorage.setItem('logged', formObj.username);
                    history.pushState(null, null, '/home');
                    Router();
                }else{
                    document.querySelector('.shadow').style.border = "3px solid red"
                }
            })
        })
    }
    onDestroy(){
    }
}