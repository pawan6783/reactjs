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

  it("should return `addEmployee` method", () => {
    const addEmployee = jest.fn();
    wrapper = shallow(<NewEmployee changed = {addEmployee}/>);
    wrapper.find('#addName').simulate('changed');
    expect(addEmployee).toBeTruthy();
  });

  it("should return `addEmployee` method", () => {
    const addEmployee = jest.fn();
    wrapper = shallow(<NewEmployee changed = {addEmployee}/>);
    wrapper.find('#addJob').simulate('changed');
    expect(addEmployee).toBeTruthy();
  });

  it("should return `addEmployee` method", () => {
    const addEmployee = jest.fn();
    wrapper = shallow(<NewEmployee changed = {addEmployee}/>);
    wrapper.find('#addJob').simulate('changed');
    expect(addEmployee).toBeTruthy();
  });

});