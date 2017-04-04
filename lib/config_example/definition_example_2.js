'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zkirilov on 23.3.2017 г..
 */

var definition = {
    title: 'Application Form',
    hasInvalids: false,
    overlay: true,
    fields: [{
        type: 'TextInput',
        name: 'Name',
        label: 'Name',
        value: '',
        required: true
    }, {
        type: 'NumberInput',
        name: 'Age',
        label: 'Age',
        value: '',
        required: true
    }],
    confirmButtonText: 'Update',
    cancelButtonText: 'Cancel',
    deleteButtonText: 'Delete'
};

var data = {
    Name: 'Leonardo',
    Age: 24
};

exports.default = {
    definition: definition,
    data: data
};
module.exports = exports['default'];