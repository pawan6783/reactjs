import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../containers/App';

configure({adapter: new Adapter()});

describe("Testing for <App/> component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should return one `EmployeeTable`", () => {
   // console.log(wrapper.debug());
    expect(wrapper.find('EmployeeTable')).toHaveLength(1);
  });

  it("should return `EmployeeTable` element with property `employeeList`", () => {
    expect(wrapper.find('EmployeeTable').prop('employeeList')).toBeTruthy();
  });
});