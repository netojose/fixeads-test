import React from 'react';
import { Provider } from 'react-redux';
import App from '../src/components/App/App';

import { shallow, render } from 'enzyme';

import {getStore} from './_generic';
let wrapper;
const store = getStore();

describe('App component', () => {
  beforeEach(() => {
      wrapper = render(<Provider store={store}><App /></Provider>);
  })

  it('render component <App />', () => {
    expect(wrapper).toHaveLength(1);
  });

});