/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ModalFooter from './Footer';

const onConfirm = () => 'Hello World';
const onCancel = () => 'Hello World';
const confirmButtonText = 'Confirm';
const cancelButtonText = 'Cancel';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ModalFooter
            onConfirm={onConfirm}
            onCancel={onCancel}
            confirmButtonText={confirmButtonText}
            cancelButtonText={cancelButtonText}
        />, div);
});

it('renders a Confirm Button', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalFooter
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText}
    />, div);

    const button = div.querySelectorAll('.confirm');

    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(confirmButtonText);
});

it('renders only a Confirm Button if cancelButtonText prop is not provided', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalFooter
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText}
    />, div);

    const button = div.querySelectorAll('.cancel');
    const confirm = div.querySelectorAll('.confirm')

    expect(button.length).toEqual(0);
    expect(confirm.length).toEqual(1);
});

it('renders a Cancel Button if cancelButtonText prop is provided', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalFooter
        onConfirm={onConfirm}
        confirmButtonText={confirmButtonText}
        cancelButtonText={cancelButtonText}
        onCancel={onCancel}
    />, div);

    const button = div.querySelectorAll('.cancel');

    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(cancelButtonText);
});
