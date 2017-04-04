'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zkirilov on 23.3.2017 г..
 */

var definition = {
    title: 'Create node',
    overlay: true,
    confirmButtonText: 'Create',
    cancelButtonText: 'Cancel',

    fields: [{
        type: 'TextInput',
        name: 'NodeName',
        label: 'Node name',
        value: '',
        required: true
    }, {
        type: 'Dropdown',
        name: 'NodeType',
        label: 'Node type',
        options: [{
            display: 'Megatrend',
            value: '0'
        }, {
            display: 'MacroTrend',
            value: '1'
        }, {
            display: 'Microtrend',
            value: '2'
        }, {
            display: 'Offering opportunity',
            value: '3'
        }, {
            display: 'Productivity implication',
            value: '4'
        }, {
            display: 'Audit implication',
            value: '5'
        }, {
            display: 'Search cluster',
            value: '6'
        }],
        value: 'Megatrend',
        required: true
    }, {
        type: 'TextArea',
        name: 'Description',
        label: 'Description',
        value: '',
        placeholder: ''
    }, {
        type: 'TextArea',
        name: 'Terms1',
        label: 'Defining terms 1',
        placeholder: 'Comma-separated list of values'
    }, {
        type: 'TextArea',
        name: 'Terms2',
        label: 'Defining terms 2',
        placeholder: 'Comma-separated list of values'
    }]
};

var data = {
    NodeType: '0'
};

var onConfirmCallback = function onConfirmCallback(data) {
    console.dir(data);
};

exports.default = {
    definition: definition,
    data: data,
    onConfirmCallback: onConfirmCallback
};
module.exports = exports['default'];
//# sourceMappingURL=definition_example_1.js.map