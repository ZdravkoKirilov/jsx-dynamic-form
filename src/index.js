import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import example_1 from './data/definition_example_1';
import example_2 from './data/definition_example_2';
import example_3 from './data/definition_example_3';

const example = example_1;

window.reactBridge = {
    init() {
        const definition = Object.assign({}, example.definition);
        ReactDOM.render(
            <App definition={definition} onConfirmCallback={example.onConfirmCallback}/>,
            document.getElementById('react-modal-root')
        );
    },

    show(_definition, _data, onConfirmCallback, onCancelCallback, onDeleteCallback) {

        this.hide();
        const definition = Object.assign({}, _definition, {isOpen: true});
        const data = Object.assign({}, (_data || example.data));
        ReactDOM.render(
            <App definition={definition}
                 data={data}
                 onConfirmCallback={onConfirmCallback}
                 onCancelCallback={onCancelCallback}
                 onDeleteCallback={onDeleteCallback}
            />,
            document.getElementById('react-modal-root')
        );
    },

    hide() {
        const definition = {
            isOpen: false
        };

        ReactDOM.render(
            <App
                definition={definition}
                data={null}
            />,
            document.getElementById('react-modal-root')
        );
    }
};

window.reactBridge.init();

export default window.reactBridge;



