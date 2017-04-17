import React from 'react';
import Footer from '../src/components/Footer/Footer';

import { shallow, } from 'enzyme';

let wrapper;

describe('Footer component', () => {
  beforeEach(() => {
      wrapper = shallow(<Footer />);
  })

  it('render component <Footer />', () => {
    expect(wrapper).toHaveLength(1);
  });
});