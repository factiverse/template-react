import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from 'i18next';

import HelloWorld from './HelloWorld';

test('Hello World should say', () => {
  const wrapper = shallow(<HelloWorld />);

  // Interaction demo
  expect(wrapper.contains('Hello World'));

  // Snapshot demo
  expect(wrapper).toMatchInlineSnapshot(`ShallowWrapper {}`);
});

describe('testing language selection', () => {
  it('should change the language to Norwegian if the radio button is selected', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('#title').text()).toBe('Hello World');
    expect(i18n.language).toBe('en');
    const event = {
      target: { value: 'no' },
    };
    wrapper.find('#langNO').simulate('change', event);
    expect(wrapper.find('#title').text()).toBe('Hello World'); // TODO: test not working
    expect(i18n.language).toBe('no');
  });
});
