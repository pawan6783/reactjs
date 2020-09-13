import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewEmployee from '../components/NewEmployee';

configure({ adapter : new Adapter()});

describe("Testing for <NewEmployee /> component", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NewEmployee />);
  });

  it("should return one `form` element", () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it("should return one `tr` element", () => {
    const addEmployee = jest.fn();
    wrapper.find('#addName').simulate('click');
    expect(addEmployee).toBeTruthy();
  });

  it("should have three `th` element with text", () => {
    const addEmployee = jest.fn();
    wrapper.find('#addJob').simulate('click');
    expect(addEmployee).toBeTruthy();
  });

});