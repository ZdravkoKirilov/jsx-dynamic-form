/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import NumberInput from './NumberInput';

const value = 55;
const name = 'Number';
const onChange = () => 55;
const label = 'Hello World';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NumberInput
               label={label}
               onChange={onChange}
               value={value}
               name={name}
        />, div);
});

it('renders correct label', () => {
    const div = document.createElement('div');
    const expectedLabel = "Some label";

    ReactDOM.render(<NumberInput
        label={expectedLabel}
        onChange={onChange}
        value={value}
        name={name}
    />, div);

    const actualLabel = div.querySelector('label');

    expect(actualLabel.textContent).toEqual(expectedLabel);
});

it('renders correct value', () => {
    const div = document.createElement('div');
    const chosenValue = 55;

    ReactDOM.render(<NumberInput
        value={chosenValue}
        label={label}
        onChange={onChange}
        name={name}
    />, div);

    const actualValue = div.querySelector('input').value;

    expect(Number(actualValue)).toEqual(chosenValue);
});

it('renders required indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<NumberInput
        required={true}
        label={label}
        onChange={onChange}
        value={value}
        name={name}
    />, div);

    const requiredSymbol = div.querySelectorAll('.required-indicator');
    expect(requiredSymbol.length).toEqual(1);
});

it('renders invalid indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<NumberInput
        valid={false}
        label={label}
        onChange={onChange}
        value={value}
        name={name}
    />, div);

    const requiredSymbol = div.querySelectorAll('.invalid-indicator');
    expect(requiredSymbol.length).toEqual(1);
});