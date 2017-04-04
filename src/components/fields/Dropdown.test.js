/**
 * Created by zkirilov on 24.3.2017 г..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

const options = [
    {display: 'One', value: '1'},
    {display: 'Two', value: '2'},
    {display: 'Three', value: '3'}
];

const label = 'Hello World';
const onChange = () => 'Hello World';
const name = 'Some field';
const value = 'Hello World';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown
        options={options}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
    />, div);
});

it('renders correct options', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Dropdown
        options={options}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
    />, div);
    const dom_options = div.querySelectorAll('option');

    expect(dom_options[0].value).toEqual(options[0].value);
    expect(dom_options[1].value).toEqual(options[1].value);
    expect(dom_options[2].value).toEqual(options[2].value);
});

it('renders correct label', () => {
    const div = document.createElement('div');
    const expectedLabel = "Some label";

    ReactDOM.render(<Dropdown
        options={options}
        label={expectedLabel}
        name={name}
        value={value}
        onChange={onChange}
    />, div);

    const actualLabel = div.querySelector('label');

    expect(actualLabel.textContent).toEqual(expectedLabel);
});

it('renders correct value', () => {
    const div = document.createElement('div');
    const chosenValue = options[1].value;

    ReactDOM.render(<Dropdown
        options={options}
        value={chosenValue}
        name={name}
        onChange={onChange}
        label={label}
    />, div);

    const actualValue = div.querySelector('select').value;

    expect(actualValue).toEqual(chosenValue);
});

it('renders required indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Dropdown
        options={options}
        required={true}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
    />, div);

    const requiredSymbol = div.querySelectorAll('.required-indicator');
    expect(requiredSymbol.length).toEqual(1);
});

it('renders invalid indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Dropdown
        options={options}
        valid={false}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
    />, div);

    const requiredSymbol = div.querySelectorAll('.invalid-indicator');
    expect(requiredSymbol.length).toEqual(1);
});

