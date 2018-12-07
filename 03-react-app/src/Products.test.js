import React from 'react';
import { shallow } from 'enzyme';

import Products from './Products';
import sinon from 'sinon';

describe('<Products/>', () => {
	it('Should call the model when a new product is added', () =>{
		//let getAllSpy = sinon.spy()
		let model = {
			addNew : sinon.spy(),
			getAll : () => []
		},
		newProductName = 'Pen';

		let wrapper = shallow(<Products model={model} />);

		wrapper.setState({newProductName : newProductName});

		wrapper.find('input[type="button"][value="Add New"]').simulate('click');

		expect(model.addNew.calledWith(newProductName)).toBeTruthy();
	})

	it('Should call the model when a new product is added', () =>{
		//let getAllSpy = sinon.spy()
		let newProductName = 'Pen',
			model = {
				addNew : sinon.spy(),
				getAll : () => [newProductName]
			};
		

		let wrapper = shallow(<Products model={model} />);

		wrapper.setState({newProductName : newProductName});

		wrapper.find('input[type="button"][value="Add New"]').simulate('click');

		expect(wrapper.contains(<li>{newProductName}</li>)).toBeTruthy();
	})
})