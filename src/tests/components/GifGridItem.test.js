import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en gif grid item', () => {
    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe mostrar componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen  igual al url y al de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('deve tener la clase animate__rubberBand', () => {
        const div = wrapper.find('.card')
        const className = div.props().className;
        expect(className.includes('animate__rubberBand')).toBe(true);
    })
    



})
