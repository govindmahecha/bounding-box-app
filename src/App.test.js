import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders without crashing', () => {
  shallow(<App />);
});

it('should should have id=`canvas`', () => {
  const wrapper = shallow(<App />);
    const {props} = wrapper.get(0);

  // expect(wrapper.contains(welcome)).toBe(true);
  expect(props.id).toEqual('canvas');
});

it('should should have onMouseMove props', () => {
  const wrapper = shallow(<App />);
  const {props} = wrapper.get(0);

  // expect(wrapper.contains(welcome)).toBe(true);
  expect(props.hasOwnProperty('onMouseMove')).toEqual(true);
});