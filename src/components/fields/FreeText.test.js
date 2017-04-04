/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import FreeText from './FreeText';

const label = "Hello World";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <FreeText
            label="some label"
        />, div);
});

it('renders correct label', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FreeText
        label={label}
    />, div);

    const actualLabel = div.querySelector('.free-text');

    expect(actualLabel.textContent).toEqual(label);
});
