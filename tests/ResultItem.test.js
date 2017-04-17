import React from 'react';
import ResultIItem from '../src/components/ResultItem/ResultItem';

import { shallow, } from 'enzyme';

let wrapper;
const item = {
  VideoId: 'ABC',
  Thumbnail: 'foo',
  Title: 'title',
  Description: 'description'
}

describe('ResultIItem component', () => {
  beforeEach(() => {
      wrapper = shallow(<ResultIItem item={item} />);
  })

  it('render component <ResultIItem />', () => {
    expect(wrapper).toHaveLength(1);
  });
});