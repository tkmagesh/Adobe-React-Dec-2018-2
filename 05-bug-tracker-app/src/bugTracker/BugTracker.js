import React, { Component } from 'react'
import { observer } from 'mobx-react';

import BugItem from './BugItem';

@observer class BugTracker extends Component{
	state = { newBugName : '' };

	onAddNewClick = () => {
		this.props.model.addNew(this.state.newBugName);
	}

	render(){
		const { model } = this.props;
		const bugs = model.list,
				bugItems = bugs.map((bug, index) => (
					<BugItem bug={bug}  key={index}  />
				));
		return(
			<React.Fragment>
				<section className="stats">
					<span className="closed">1</span>
					<span> / </span>
					<span>{bugs.length}</span>
				</section>
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" onChange = { evt => this.setState({newBugName : evt.target.value}) } />
					<input type="button" value="Add New" onClick={this.onAddNewClick}/>
				</section>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" onClick={model.removeClosed} />
				</section>
			</React.Fragment>
		)
	}
}

export default BugTracker;

