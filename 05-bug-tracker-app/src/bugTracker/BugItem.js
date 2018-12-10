import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer class BugItem extends Component{
	render(){
		let { bug } = this.props;
		let bugStyle= 'bugname ' + (bug.isClosed ? ' closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={() => bug.toggle()} >
					{bug.name}
				</span>
			</li>
		)
	}
}

export default BugItem;