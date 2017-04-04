/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ModalHeader from './Header';

const title = "Hello World";
const warning = <div className="modal-warnings">There are errors in the form</div>;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ModalHeader
            title={title}
        />, div);
});

it('renders correct title', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalHeader
        title={title}
    />, div);

    const actualTitle = div.querySelector('.modal-title');

    expect(actualTitle.textContent).toEqual(title);
});

it('renders without warning when warning prop is not provided', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalHeader
        title={title}
    />, div);

    const renderedWarning = div.querySelectorAll('.modal-warnings');

    expect(renderedWarning.length).toEqual(0);
});

it('renders a warning when warning prop is provided', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ModalHeader
        title={title}
        warnings={warning}
    />, div);

    const renderedWarning = div.querySelectorAll('.modal-warnings');

    expect(renderedWarning.length).toEqual(1);
});

