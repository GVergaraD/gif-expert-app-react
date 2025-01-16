import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { AddCategory } from '../../src/components';
import { screen } from '@testing-library/react';
import { describe, jest, test } from '@jest/globals';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    // const value = 'Hola Mundo';
    // const { container } = render(<AddCategory onNewCategory={() => {}} />);
    // const input = container.querySelector('input');
    // input.value = value;
    // expect(input.value).toBe(value);
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Saitama' } });
    expect(input.value).toBe('Saitama');

  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar el onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
  });

});