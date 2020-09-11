import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter()});

describe("Testing of <App /> component", ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>);
    });
    
    it("should return one div element", () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it("should return div element with className `App` ", () => {
      //  wrapper.setProps({className: 'App'});
        expect(wrapper.find('div').prop('className')).toBe('App');
    });

    it("should return one <Hello/> element", () => {
        //  wrapper.setProps({className: 'App'});
          expect(wrapper.find('Hello').exists()).toBeTruthy();
      })

    
});