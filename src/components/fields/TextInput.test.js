/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';

const value = "Hello World";
const name = 'Number';
const onChange = () => 55;
const label = 'Hello World';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TextInput
            label={label}
            onChange={onChange}
            value={value}
            name={name}
        />, div);
});

it('renders correct label', () => {
    const div = document.createElement('div');
    const expectedLabel = "Some label";

    ReactDOM.render(<TextInput
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
    const chosenValue = "Hello World";

    ReactDOM.render(<TextInput
        value={chosenValue}
        label={label}
        onChange={onChange}
        name={name}
    />, div);

    const actualValue = div.querySelector('input').value;

    expect(actualValue).toEqual(chosenValue);
});

it('renders required indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<TextInput
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

    ReactDOM.render(<TextInput
        valid={false}
        label={label}
        onChange={onChange}
        value={value}
        name={name}
    />, div);

    const requiredSymbol = div.querySelectorAll('.invalid-indicator');
    expect(requiredSymbol.length).toEqual(1);
});
