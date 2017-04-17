import React from 'react';
import { Provider } from 'react-redux';
import VideosList from '../src/components/Pages/VideosList/VideosList';

import { shallow, } from 'enzyme';

import {getStore} from './_generic';
let wrapper;
const store = getStore();

describe('Page VideosList component', () => {
  beforeEach(() => {
      wrapper = shallow(<Provider store={store}><VideosList /></Provider>);
  })

  it('render component <VideosList />', () => {
    expect(wrapper).toHaveLength(1);
  });
});