'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zkirilov on 23.3.2017 г..
 */

var definition = {
    isOpen: true,
    title: 'Please confirm',
    hasInvalids: false,
    overlay: false,
    fields: [{
        type: 'FreeText',
        name: 'Confirm',
        label: 'Are you sure you want to proceed?'
    }],
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
};

var data = {};

exports.default = {
    definition: definition,
    data: data
};
module.exports = exports['default'];
//# sourceMappingURL=definition_example_3.js.map