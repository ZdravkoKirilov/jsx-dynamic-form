import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import {Simulate} from 'react-addons-test-utils';

const onConfirm = () => 'some value';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
    />, div);
});

it('renders outside screen when closed', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
        isOpen={false}
    />, div);

    const modal = div.querySelector('.modal-root');
    expect(modal.style.top).toEqual('-1000px');
});

it('renders inside screen when opened', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
        isOpen={true}
    />, div);

    const modal = div.querySelector('.modal-root');
    expect(modal.style.top).not.toContain('-');
});

it('renders invalid indicator', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
        hasInvalids={true}
    />, div);

    const warnings = div.querySelectorAll('.modal-warnings');
    expect(warnings.length).toEqual(1);
});

it('invokes onConfirm function when Confirm button is clicked', () => {
    const div = document.createElement('div');
    const onConfirm = jest.fn();

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
    />, div);

    const button = div.querySelector('.modal-root .confirm');
    Simulate.click(button);

    expect(onConfirm).toHaveBeenCalled();
});

it('invokes onCancel function when Cancel button is clicked', () => {
    const div = document.createElement('div');
    const onCancel = jest.fn();

    ReactDOM.render(<Modal
        title="Hello World"
        onConfirm={onConfirm}
        onCancel={onCancel}
        cancelButtonText='Cancel'
    />, div);

    const button = div.querySelector('.modal-root .cancel');
    Simulate.click(button);

    expect(onCancel).toHaveBeenCalled();
});
