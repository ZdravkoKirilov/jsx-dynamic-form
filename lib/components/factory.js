'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextInput2 = require('./fields/TextInput');

var _TextInput3 = _interopRequireDefault(_TextInput2);

var _NumberInput2 = require('./fields/NumberInput');

var _NumberInput3 = _interopRequireDefault(_NumberInput2);

var _TextArea2 = require('./fields/TextArea');

var _TextArea3 = _interopRequireDefault(_TextArea2);

var _Dropdown2 = require('./fields/Dropdown');

var _Dropdown3 = _interopRequireDefault(_Dropdown2);

var _FreeText2 = require('./fields/FreeText');

var _FreeText3 = _interopRequireDefault(_FreeText2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by zkirilov on 23.3.2017 г..
 */

exports.default = {
    TextInput: function TextInput(props) {
        return _react2.default.createElement(_TextInput3.default, {
            key: props.key,
            name: props.name,
            label: props.label,
            onChange: props.onChange,
            required: props.required,
            valid: props.valid,
            value: props.value,
            placeholder: props.placeholder
        });
    },
    NumberInput: function NumberInput(props) {
        return _react2.default.createElement(_NumberInput3.default, {
            key: props.key,
            name: props.name,
            label: props.label,
            onChange: props.onChange,
            required: props.required,
            valid: props.valid,
            value: props.value,
            placeholder: props.placeholder
        });
    },
    TextArea: function TextArea(props) {
        return _react2.default.createElement(_TextArea3.default, {
            key: props.key,
            name: props.name,
            label: props.label,
            onChange: props.onChange,
            required: props.required,
            valid: props.valid,
            value: props.value,
            placeholder: props.placeholder
        });
    },
    Dropdown: function Dropdown(props) {
        return _react2.default.createElement(_Dropdown3.default, {
            key: props.key,
            name: props.name,
            label: props.label,
            onChange: props.onChange,
            options: props.options,
            required: props.required,
            valid: props.valid,
            value: props.value
        });
    },
    FreeText: function FreeText(props) {
        return _react2.default.createElement(_FreeText3.default, {
            name: props.name,
            label: props.label,
            key: props.key
        });
    },
    createComponent: function createComponent(type, props) {
        var constructor = this[type];
        var component = constructor(props) || null;
        return component;
    }
};
module.exports = exports['default'];
//# sourceMappingURL=factory.js.map