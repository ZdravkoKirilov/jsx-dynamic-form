/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const definition = {
    title: 'Hello World',
    confirmButtonText: 'Confirm',
    fields: [
        {
            type: 'TextInput',
            name: 'Text',
            label: 'Hello World'
        }, {
            type: 'Dropdown',
            name: 'Dropdown',
            label: 'Hello World 2',
            options: [
                {
                    display: 'Two',
                    value: 'Dve'
                }, {
                    display: 'One',
                    value: 'Edno'
                }
            ]
        }, {
            type: 'TextArea',
            name: 'TextArea',
            label: 'Desc'
        }, {
            type: 'NumberInput',
            name: 'Number',
            label: 'Enter Number'
        }, {
            type: 'FreeText',
            name: 'Free',
            label: 'Free'
        }
    ]
};

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <App
            definition={definition}
        />, div);
});

it('renders correct title', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <App
            definition={definition}
        />, div);

    const title = div.querySelector('.modal-title');
    expect(title.textContent).toEqual(definition.title);
});

it('renders correct confirm button', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <App
            definition={definition}
        />, div);

    const button = div.querySelectorAll('.confirm');
    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(definition.confirmButtonText);
});

it('should not render a cancel button if it does not appear in definition', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <App
            definition={definition}
        />, div);

    const button = div.querySelectorAll('.cancel');
    expect(button.length).toEqual(0);
});

it('should render a cancel button if it appears in definition', () => {
    const div = document.createElement('div');

    const definition = {
        title: 'Hello World',
        cancelButtonText: 'Cancel'
    };

    ReactDOM.render(
        <App
            definition={definition}
        />, div);

    const button = div.querySelectorAll('.cancel');
    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(definition.cancelButtonText);
});

it('should render correct fields from definition', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <App
            definition={definition}
        />, div);

    const text = div.querySelectorAll('.textinput');
    const dropdown = div.querySelectorAll('.dropdown');

    expect(text.length).toEqual(1);
    expect(dropdown.length).toEqual(1);
});

it('should prepopulate correct data', () => {
    const div = document.createElement('div');

    const data = {
        Text: 'Some value',
        Dropdown: 'Dve',
        Number: 5.55,
        TextArea: 'Big text'
    };

    ReactDOM.render(
        <App
            definition={definition}
            data={data}
        />, div);

    const text = div.querySelector('.textinput input');
    const dropdown = div.querySelector('.dropdown select');
    const number = div.querySelector('.numberinput input');
    const textarea = div.querySelector('.textareainput textarea');

    expect(text.value).toEqual(data.Text);
    expect(dropdown.value).toEqual(data.Dropdown);
    expect(Number(number.value)).toEqual(data.Number);
    expect(textarea.value).toEqual(data.TextArea);
});


