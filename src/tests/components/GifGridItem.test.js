import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en gif grid item', () => {
    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    
    test('deve mostrar componente correctamente ', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot();
    })

})
