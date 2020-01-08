import Result from './final_result';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

let regularArray = ["split", "bread", "regular", "regular", "peel", "regular", "regular", "peel"];

let splitArray = ["split", "bread", "regular", "regular", "peel", "regular", "regular", "peel"];

let breadArray = ["split", "bread", "regular", "regular", "peel", "regular", "regular", "peel"];

let peelArray = ["split", "bread", "regular", "regular", "peel", "regular", "regular", "peel"];

configure({ adapter: new Adapter() });
describe('Result component', () => {

    it('Result component exists', () => {
        //when
        const result = shallow(<Result answerArray={regularArray} />)
        //then
        expect(result.find('.backBlue').length).toBe(1);
    })


    it('Regular result passes', () => {
        //when
        const result = shallow(<Result answerArray={regularArray} />);
        let header3 = result.find('h3');
        //then
        expect(header3.text()).toBe('Regular Banana');
    })

    it('Split result passes', () => {
        //when
        const result = shallow(<Result answerArray={splitArray} />);
        let header3 = result.find('h3');
        //then
        expect(header3.text()).toBe('Banana Split');
    })

    it('bread result passes', () => {
        //when
        const result = shallow(<Result answerArray={breadArray} />);
        let header3 = result.find('h3');
        //then
        expect(header3.text()).toBe('Banana Bread');
    })

    it('peel result passes', () => {
        //when
        const result = shallow(<Result answerArray={peelArray} />);
        let header3 = result.find('h3');
        //then
        expect(header3.text()).toBe('Banana Peel');
    })
})