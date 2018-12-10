import React, { Component } from 'react'
import { observer } from 'mobx-react';

import BugItem from './BugItem';
import BugStats from './BugStats';
import BugEdit from './BugEdit';


@observer class BugTracker extends Component{
	
	componentDidMount(){
		this.props.model.load();
	}

	render(){
		const { model } = this.props;
		const bugs = model.list,
				bugItems = bugs.map((bug, index) => (
					<BugItem bug={bug}  key={index}  />
				));
		return(
			<React.Fragment>
				{/*<input type="button" value="Load" onClick={() => model.load()} />*/}
				<BugStats stats={model.stats} />
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<BugEdit addNew={model.addNew} />
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

