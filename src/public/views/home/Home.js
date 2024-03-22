import Aview from '/public/js/AbstractView.js'

export default class extends Aview{
    constructor(){
        super();

    }

    getHtml(){
        return `
        <div class="container-fluid">
            <h1>HOMEEEEE</h1>
        </div>
        `
    }
    onInit(){
    }
    onDestroy(){
        console.log("distruggo Register")
    }
}