import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import breakdown from './testData/donations.js'
import DonationPopover from './DonationPopover.js'
// import registerServiceWorker from './registerServiceWorker';

// Get the element to prepend our app to. This could be any element on a specific website or even just `document.body`.
const viewport = document.getElementById('viewport');
// Create a div to render the <App /> component to.
const app = document.createElement('div');

// Set the app element's id to `root`. This is the same as the element that create-react-app renders to by default so it will work on the local server too.
app.id = 'root';

// Prepend the <App /> component to the viewport element if it exists. You could also use `appendChild` depending on your needs.
if (viewport) viewport.prepend(app);


// Render the <App /> component.
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(breakdown.map((company) => <DonationPopover {...company}/>), document.getElementById('root'));



// var allProducts = document.getElementsByClassName("s-result-list sg-row")[0].children;
// console.log("5");
//
// for (var i = 0; i < allProducts.length; i++) {
//     console.log("iter: " + i.toString());
//     var currProduct = allProducts[i];
//     //var insertionElement = currProduct.children[0].children[0].children[0].children[0].children[0];
//     var infoPlace = currProduct.children[0].children[0].children[0];
//     var insertionPortion = infoPlace.getElementsByClassName("sg-row")[1];
//     if (insertionPortion) {
//         const app = document.createElement('div');
//         app.id = 'root';
//         insertionPortion.prepend(app);
//         ReactDOM.render(<App />, document.getElementById('root'));
//         var companyName = insertionPortion.getElementsByClassName("a-row a-size-base a-color-secondary")[0].innerText;
//         console.log(companyName);
//     }
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
