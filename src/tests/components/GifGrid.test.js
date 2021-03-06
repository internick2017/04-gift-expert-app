import React from "react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGrid } from "../../components/GifGrid";
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el GifGrid', () => {

    const category = 'Bleach';

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot()

    });

    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [
            {
                id: 'Nick',
                url: 'https://localhos/esto/aquello.com',
                title: 'Prueba de locos'
            },
            {
                id: '2',
                url: 'https://localhos/esto/aquello.com',
                title: 'Prueba de locos'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)


    });



});
