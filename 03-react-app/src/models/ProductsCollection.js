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

	getCount(){
		return this._list.length;
	}
}
export default ProductsCollection;