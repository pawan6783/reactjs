import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmployeeTable from '../components/EmployeeTable';

configure({ adapter : new Adapter()});

describe("Testing for <EmployeeTable /> component", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<EmployeeTable />);
  });

  it("should return one `table` element", () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  it("should return one `tr` element", () => {
    expect(wrapper.find('tr')).toHaveLength(1);
  });

  it("should have three `th` element with text", () => {
    expect(wrapper.find('th')).toHaveLength(3);
    });

});