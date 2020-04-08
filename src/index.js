import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import breakdown from './testData/donations.js'
import DonationPopover from './DonationPopover.js'
import App from './App.js'
// import registerServiceWorker from './registerServiceWorker';

// Get the element to prepend our app to. This could be any element on a specific website or even just `document.body`.
const viewport = document.body;
// Create a div to render the <App /> component to.
const app = document.createElement('div');

// Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
app.id = 'root';

// Prepend the <App /> component to the viewport element if it exists. You could also use `appendChild` depending on your needs.
viewport.prepend(app);

// Render the <App /> component.
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//NEED TO CHANGE THE ID OF THIS ELEM TO GET THE RIGHT RESULT
ReactDOM.render(breakdown.map((company) => <DonationPopover {...company}/>), document.getElementById('root'));



var allProducts = document.getElementsByClassName("s-result-list sg-row")[0].children;
console.log("5");
console.log(allProducts.length)
for (var i = 0; i < allProducts.length; i++) {
    console.log("iter: " + i.toString());
    var currProduct = allProducts[i];
    //var insertionElement = currProduct.children[0].children[0].children[0].children[0].children[0];
	var infoPlace = check_for_xth_child(currProduct, 3);
	infoPlace = infoPlace ? infoPlace.getElementsByClassName("a-section")[0] : null;
	if (infoPlace) {
		//insertionPortion = infoPlace.children[2].children[0].children[0]
		var insertionPortion = infoPlace.getElementsByClassName("a-section a-spacing-none")[0];
		if (insertionPortion) {
	    	const app = document.createElement('div');
	    	app.id = 'root';
	   		insertionPortion.appendChild(app);
	    	ReactDOM.render(breakdown.map((company) => <DonationPopover {...company}/>), app);
	    	var companyName = insertionPortion.innerText;
	    	console.log(companyName);
		}
	}
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//returns component.child[0] x X where if X = 3 is component.child[0].child[0].child[0]
function check_for_xth_child(component, x) {
	for (var j = 0; j < x; j++) {
		if (!component) {
			return null;
		}
		component = component.children[0];
	}
	return component;
}