import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';



describe('Pruebas en el Componente AddCategory', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion en el submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled()
    });

    test('Deve de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'si funciono';
        // 1 simular el input change
        wrapper.find('input').simulate('change', { target: { value } });
        // 2 simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //  3 set categories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // 4 el valor del input deve estar ''

        expect(wrapper.find('input').prop('value')).toBe('')


    });




})


