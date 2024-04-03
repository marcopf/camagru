import Aview from '/public/js/AbstractView.js'

export default class extends Aview{
    constructor(){
        super();

    }

    getHtml(){
        return `
        <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" data-link href="/">Camagru</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" data-link href="/">Home</a>
                  <a class="nav-link" data-link href="/login">Login</a>
                  <a class="nav-link" data-link href="/register">Register</a>
                </div>
                <div class="container-fluid d-flex justify-content-end">
                    ${localStorage.getItem('logged') != null ? `<span style="display: flex; align-items: center;" class="px-5 text-white">hi!, ${localStorage.getItem('logged')}</span><button class="btn btn-danger logout">Logout</button>` :`<span style="display: none; align-items: center;" class="px-5 text-white">hi!, ${localStorage.getItem('logged')}</span><button style="display: none;" class="btn btn-danger logout">Logout</button>`}
                </div>
              </div>
            </div>
        </nav>
        `
    }
    onDestroy(){
    }
}