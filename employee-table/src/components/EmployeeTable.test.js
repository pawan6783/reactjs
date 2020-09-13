import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import EmployeeTable from './EmployeeTable';

configure({adapter: new Adapter()})

describe("Testing for <EmployeeTable/> component", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<EmployeeTable/>);
    });

    it("should return one `table` element", () => {
        expect(wrapper.find('table')).toHaveLength(1);
    });

    it("should return one `tr` element", () => {
        expect(wrapper.find('tr')).toHaveLength(1);
    });

    it("should return two `th` element", () => {
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it("should return `tr` element with text ", () => {
        expect(wrapper.find('#name').text()).toEqual("Name");
        expect(wrapper.find('#job').text()).toEqual("Job");
    });

    it(" checks the `employeeList` object", () => {
        expect(wrapper.contains('{props.employeeList}')).toBeDefined();
    });
});