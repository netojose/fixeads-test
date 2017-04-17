import React from 'react';
import ListItems from '../src/components/ListItems/ListItems';

import { shallow, } from 'enzyme';

let wrapper;

describe('ListItems component', () => {
  beforeEach(() => {
      wrapper = shallow(<ListItems />);
  })

  it('render component <ListItems />', () => {
    expect(wrapper).toHaveLength(1);
  });
});