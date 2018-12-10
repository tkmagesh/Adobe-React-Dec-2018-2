import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer class BugItem extends Component{
	render(){
		let { bug } = this.props;
		return(
			<li>
				<span className="bugname" onClick={() => bug.toggle()} >
					{JSON.stringify(bug)}
				</span>
			</li>
		)
	}
}

export default BugItem;