import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

import ProductsCollection from './models/ProductsCollection';
import ProductCount from './ProductCount';
import Products from './Products';

let model = new ProductsCollection();
function renderProducts(){
	ReactDOM.render(
			<div>
				<ProductCount data={model.getAll().length}></ProductCount>
				<Products model={model}/>
			</div>,
		document.getElementById('root'));
}
renderProducts();
model.subscribe(renderProducts);
