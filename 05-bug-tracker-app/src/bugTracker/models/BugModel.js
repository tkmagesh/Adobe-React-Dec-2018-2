import { observable } from 'mobx';

class BugModel{
	@observable name  = '';
	@observable isClosed = false;

	constructor(bugName){
		this.name = bugName;
	}
	toggle(){
		this.isClosed = !this.isClosed;
	}
}

export default BugModel;