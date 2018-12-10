import { observable, action } from 'mobx';
import BugModel from './BugModel';


class BugsCollectionModel{
	@observable list = [];

	addNew(newBugName){
		let newBug = new BugModel(newBugName);
		this.list.push(newBug);
	} 

	//@action.bound
	removeClosed = () => {
		this.list = this.list.filter(bug => !bug.isClosed);
		console.log(this.list);
	}
}

export default BugsCollectionModel;