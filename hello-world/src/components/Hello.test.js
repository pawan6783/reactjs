import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello';

configure({adapter: new Adapter()})

describe("Testing of <Hello /> component", () => {
    let wrapper;
    
    beforeEach(() => {
         wrapper = shallow(<Hello />);

    });

    it("should return one div element", () => {

        expect(wrapper.find('div')).toHaveLength(1);
    });

    it("should return div element with text 'Hello World'", () => {
        expect(wrapper.find('div').text()).toContain('Hello World');
    })
});