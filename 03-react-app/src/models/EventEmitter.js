class EventEmitter{
	_listeners = [];

	subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			this._listeners.push(listenerFn);
	}

	triggerChange(){
		this._listeners.forEach(listenerFn => listenerFn());
	}
}
export default EventEmitter;