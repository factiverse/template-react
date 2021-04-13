import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

test('Hello World should say', () => {
  const headline = shallow(<HelloWorld />);

  // Interaction demo
  expect(headline.text()).toEqual('Hello World');

  // Snapshot demo
  expect(headline).toMatchInlineSnapshot(`ShallowWrapper {}`);
});
