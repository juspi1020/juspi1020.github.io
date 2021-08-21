import React from 'react';
// import { render } from "@testing-library/react";
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruenas para <CounterApp/> ', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });


    test('debe de mostrar <CounterApp/> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    });

    test('debe de incrementar con el boton de +1', () => {

        const btn1 = wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('11');

    });

    test('debe de decrementar con el boton de -1', () => {

        const btn3 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('9');

    });

    test('debe reiniciar al valor inicial con el btn reset', () => {

        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        console.log(counterText);

        expect(counterText).toBe('105');

    })


})
