import EventEmitter from './EventEmitter';

class ProductsCollection extends EventEmitter{
	_list = [];

	addNew(productName){
		this._list.push(productName);
		this.triggerChange();
	}

	getAll(){
		return [...this._list];
	}

}
export default ProductsCollection;