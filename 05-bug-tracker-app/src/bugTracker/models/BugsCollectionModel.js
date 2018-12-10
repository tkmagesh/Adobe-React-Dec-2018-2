import { observable, action, computed } from 'mobx';
import BugModel from './BugModel';
import bugApi from '../services/bugApi';


class BugsCollectionModel{
	@observable list = [];

	@action.bound
	addNew(newBugName){
		let newBug = new BugModel({ name : newBugName});
		this.list.push(newBug);
	} 

	//@action.bound
	removeClosed = () => {
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	@action.bound
	load(){
		bugApi
			.getAll()
			.then(bugsData => {
				this.list = bugsData.map(bugData => new BugModel(bugData));
			});
	}

	
	@computed get stats(){
		return {
			total : this.list.length,
			closed : this.list.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
		};
	}

	getStats(){
		console.log('getStats() triggered');
		return {
			total : this.list.length,
			closed : this.list.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
		};
	}
}

export default BugsCollectionModel;