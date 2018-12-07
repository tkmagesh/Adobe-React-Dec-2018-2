import React from 'react';
import { shallow } from 'enzyme';

import ProductCount from './ProductCount';

describe('<ProductCount />', () => {
	it('should display the given count', () => {
		let wrapper = shallow(<ProductCount data="10" />);

		expect(wrapper.contains(<div>10</div>)).toBeTruthy();
	});
});