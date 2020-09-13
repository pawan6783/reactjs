import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter : new Adapter()});

describe("Testing for <App /> component", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should return one `EmployeeTable` element", () => {
    expect(wrapper.find('EmployeeTable')).toHaveLength(1);
  });

  it("should return one `NewEmployee` element", () => {
    expect(wrapper.find('NewEmployee')).toHaveLength(1);
  });

  it("should have `NewEmployee` element with property `addEmployee` and `clicked`", () => {
    expect(wrapper.find('NewEmployee').prop('addEmployee')).toBeTruthy();
    expect(wrapper.find('NewEmployee').prop('clicked')).toBeTruthy();
  });

  it("should have `NewEmployee` element with property `addEmployee` and `clicked`", () => {
    expect(wrapper.find('NewEmployee').prop('addEmployee')).toBeTruthy();
    expect(wrapper.find('NewEmployee').prop('clicked')).toBeTruthy();
  });

  it("should have `div` element with property `className` ", () => {
    expect(wrapper.find('div').prop('className')).toBeDefined();
  });

});