import React from 'react';
import { Provider } from 'react-redux';
import SearchBar from '../src/components/SearchBar/SearchBar';

import { shallow, } from 'enzyme';

import {getStore} from './_generic';
let wrapper;
const store = getStore();

describe('SearchBar component', () => {
  beforeEach(() => {
      wrapper = shallow(<Provider store={store}><SearchBar /></Provider>);
  })

  it('render component <SearchBar />', () => {
    expect(wrapper).toHaveLength(1);
  });
});