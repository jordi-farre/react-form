import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<App />);

  expect(component).is('[name="holderName"]').toBe(true);
});
