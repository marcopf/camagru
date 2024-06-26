import Routes from "/public/js/path.js"
import navbar from '/public/views/navBar.js'

let fRoute = 0;
let memory = 0;

function clearCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

const Router =()=>{
	let matechedLocation = 0;

	for (let route of Routes)
	{
		//if found set lastClass to delete previus css and set matchedLocation to update the new html
		if (route.path == location.pathname)
		{
            if (memory != 0){
                memory.onDestroy();
            }
			matechedLocation = new route.view;
            memory = matechedLocation;
			fRoute = route;
			break ;
		}
	}
	//if no path match the '/' is setted
	if (matechedLocation == 0)
	{
		matechedLocation = new Routes[0].view;
		fRoute = Routes[0];
	}
	document.querySelector("#app").innerHTML = "";
	setTimeout(() => {
		let nav = new navbar;
		document.querySelector("#navbar-container").innerHTML = nav.getHtml();
		document.querySelector("#app").innerHTML = matechedLocation.getHtml();
		matechedLocation.onInit();
		document.querySelector('.logout').addEventListener('click', ()=>{
            clearCookie();
            localStorage.clear();
            history.pushState(null, null, '/login');
            Router();
        })
	}, 50);
	
	//setup the listener for submit button
}

export default Router