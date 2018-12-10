import React , { Component } from 'react';

import { observer } from 'mobx-react';

/*@observer class BugStats extends Component{
	render(){
		let { stats } = this.props; 
		return(
			<section className="stats">
				<span className="closed">{stats.closed}</span>
				<span> / </span>
				<span>{stats.total}</span>
			</section>
		)
	}
}*/


/* Higher Order Components */
let BugStatsComponent = ({ stats }) => (
	<section className="stats">
		<span className="closed">{stats.closed}</span>
		<span> / </span>
		<span>{stats.total}</span>
	</section>
);

let BugStats = observer(BugStatsComponent);
export default BugStats;