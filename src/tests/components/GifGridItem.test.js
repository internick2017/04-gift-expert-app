import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en gif grid item', () => {
    test('deve mostrar componente correctamente ', () => {
        const wrapper = shallow(<GifGridItem />)
        expect(wrapper).toMatchSnapshot();
    })

})
