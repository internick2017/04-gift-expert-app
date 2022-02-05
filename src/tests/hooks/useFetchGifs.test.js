import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas hook en use fetchgif', () => {


    test('debe de retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Bleach'));

        const { data, loading } = result.current;
        await waitForNextUpdate({ timeout: 3000 });
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('deve de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Bleach'));

        await waitForNextUpdate({ timeout: 3000 });

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });


});
