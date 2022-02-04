import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {

    test('deve hacer match con el snapshot', () => {

        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();

    });

    test('deve de mostrar una lista de categorias', () => {
        const categories = ['Bleach', 'Death note'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });

});
