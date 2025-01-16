import { render, screen } from "@testing-library/react"; // yarn add @testing-library/dom
import { GifItem } from "../../src/components";


describe('Pruebas en <GifItem />',()=>{
    test('Debe de hacer match con el snapshot',()=>{
        const title = 'Saitama';
        const url = 'https://test.test';
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })
    test('Debe de mostrar la imagen con el URL y el ALT indicado',()=>{
        const title = 'Saitama';
        const url = 'https://test.test/';
        // const {container} = render(<GifItem title={title} url={url}/>);
        // const {src, alt} = container.querySelector('img');
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el titulo en el componente',()=>{
        const title = 'Saitama';
        const url = 'https://test.test';
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })


})