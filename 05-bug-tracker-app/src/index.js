import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

class ProductModel{
	@observable name = 'Pen';
	@observable cost = 0;
	@observable units = 10;

	get value(){
		return this.cost * this.units;
	}
}

@observer class Product extends React.Component{
	state = { newCost : 0 };
	onChangeProductClick = () => {
		this.props.model.cost = this.state.newCost;
	}
	render(){
		let { model } = this.props;
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Cost</th>
							<th>Units</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{model.name}</td>
							<td>{model.cost}</td>
							<td>{model.units}</td>
						</tr>
					</tbody>
				</table>
				<label> Cost : </label>
				<input type="number" onChange={evt => this.setState({newCost : evt.target.valueAsNumber})} />
				<input type="button" value="Change Product" onClick={this.onChangeProductClick} />
			</div>
		);
	}
}

@observer class ProductValue extends React.Component{
	render(){
		return(
			<h3>{this.props.model.value}</h3>
		)
	}
}

var model = new ProductModel();
ReactDOM.render(
	<div>
		<Product model={model} />
		<ProductValue model={model} />
	</div>,

	document.getElementById('root'));


/*import App from './App';*/
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
