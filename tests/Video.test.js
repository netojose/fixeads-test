import React from 'react';
import { Provider } from 'react-redux';
import Video from '../src/components/Pages/Video/Video';

import { shallow, } from 'enzyme';

import {getStore} from './_generic';
let wrapper;
const store = getStore();

describe('Page Video component', () => {
  beforeEach(() => {
      wrapper = shallow(<Provider store={store}><Video /></Provider>);
  })

  it('render component <Video />', () => {
    expect(wrapper).toHaveLength(1);
  });
});