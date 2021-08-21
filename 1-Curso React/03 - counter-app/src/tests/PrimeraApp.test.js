import React from 'react';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraAPP/>', () => {
    // test('debe de mostar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp/> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    })
    test('debe de moestar el subtitulo enviado por prorps', () => {

        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={ subtitulo} />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    })



})
