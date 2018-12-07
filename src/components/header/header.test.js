import React from 'react'
import { shallow } from 'enzyme';
import { Header } from './index';


describe('header', () => {
    const props = { color: 'primary' };
    const header = shallow(<Header { ...props } />);
    
    it('renders properly', () => {
        expect(header.exists()).toBe(true);
    });
});