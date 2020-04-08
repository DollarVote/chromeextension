import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import breakdown from './testData/donations.js'
import DonationPopover from './DonationPopover.js'
import App from './App.js'

var allProducts = document.getElementsByClassName("s-result-list sg-row")[0].children;
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
	    	ReactDOM.render(<DonationPopover {...breakdown[i%2]}/>, app);
	    	var companyName = insertionPortion.innerText;
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