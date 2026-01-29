import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorV2 from './CalculatorV2';

describe('CalculatorV2', () => {
  test('renders initial value 0', () => {
    const { container } = render(<CalculatorV2 />);
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('0');
  });

  test('number input builds multi-digit numbers', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('123');
  });

  test('performs addition correctly', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('3');
  });

  test('handles divide by zero with message', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '/' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent("Can't divide with 0");
  });

  test('invert toggles sign', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '+-' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('-5');
  });

  test('percent converts number to percentage', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '%' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('0.5');
  });

  test('reset clears to 0', () => {
    const { container } = render(<CalculatorV2 />);
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));
    const display = container.querySelector('.responsive-text');
    expect(display).toHaveTextContent('0');
  });
});
