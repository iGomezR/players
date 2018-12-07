import React from 'react'
import { shallow } from 'enzyme';
import Datatable from './index';


describe('Datatable', () => {
    const props = {};
    const datatable = shallow(<Datatable { ...props } />);
    it('renders properly', () => {
        expect(datatable.exists()).toBe(true);
    })
})