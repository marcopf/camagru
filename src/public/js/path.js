import Login from "/public/views/login/Login.js"
import Register from "/public/views/register/Register.js"
import Home from "/public/views/home/Home.js"

const   Routes = [
    { path: "/", view: Home, style: "/style/home.css"},
    { path: "/login", view: Login, style: "/style/login.css"},
    { path: "/register", view: Register, style: "/style/signup.css"},
]

export default Routes;