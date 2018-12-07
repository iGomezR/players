import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import App from './App';

describe('App', () => {
    const store = createStore(rootReducer);
    const app = shallow(<Provider store={store}><App store={store} /></ Provider>);

    it('renders without crashing', () => {
        expect(app).toMatchSnapshot();
    });
});
