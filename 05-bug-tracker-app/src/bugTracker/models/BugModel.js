import { observable } from 'mobx';

class BugModel{
	@observable name  = '';
	@observable isClosed = false;

	constructor({name, id = 0, isClosed = false, createdAt}){
		this.name = name;
		this.id = id;
		this.isClosed = isClosed;
		this.createdAt = createdAt || new Date();
	}

	toggle(){
		this.isClosed = !this.isClosed;
	}
}

export default BugModel;