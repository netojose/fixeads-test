import React from 'react';
import Loader from '../src/components/Loader/Loader';

import { shallow, } from 'enzyme';

let wrapper;

describe('Loader component', () => {
  beforeEach(() => {
      wrapper = shallow(<Loader />);
  })

  it('render component <Loader />', () => {
    expect(wrapper).toHaveLength(1);
  });
});