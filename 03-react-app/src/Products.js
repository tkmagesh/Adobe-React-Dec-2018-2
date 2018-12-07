import React, { Component } from 'react';

class Products extends Component{
	txtProductNameRef = React.createRef();
	state = {
		newProductName : ''
	};

	onAddNewClick = () => {
		this.props.model.addNew(this.state.newProductName);
		this.setState({newProductName : ''});
	}

	render(){
		let productNames = this.props.model.getAll();
		let productItems = productNames.map((productName, index) => (<li key={index}>{productName}</li>));
		return(
			<div>
				<label> Product Name :</label>
				<input type="text" onChange={evt => this.setState({newProductName : evt.target.value})} value={this.state.newProductName}/>
				<span> [ {this.state.newProductName.length} ] </span>
				<input type="button" value="Add New" onClick={ this.onAddNewClick }/>
				<ol>
					{productItems}
				</ol>
			</div>
		)
	}
}

export default Products;