import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";


describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    });
    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const { images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
});