'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var value = "Hello World"; /**
                            * Created by zkirilov on 24.3.2017 г..
                            */

var name = 'Number';
var onChange = function onChange() {
    return 55;
};
var label = 'Hello World';

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_TextInput2.default, {
        label: label,
        onChange: onChange,
        value: value,
        name: name
    }), div);
});

it('renders correct label', function () {
    var div = document.createElement('div');
    var expectedLabel = "Some label";

    _reactDom2.default.render(_react2.default.createElement(_TextInput2.default, {
        label: expectedLabel,
        onChange: onChange,
        value: value,
        name: name
    }), div);

    var actualLabel = div.querySelector('label');

    expect(actualLabel.textContent).toEqual(expectedLabel);
});

it('renders correct value', function () {
    var div = document.createElement('div');
    var chosenValue = "Hello World";

    _reactDom2.default.render(_react2.default.createElement(_TextInput2.default, {
        value: chosenValue,
        label: label,
        onChange: onChange,
        name: name
    }), div);

    var actualValue = div.querySelector('input').value;

    expect(actualValue).toEqual(chosenValue);
});

it('renders required indicator', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_TextInput2.default, {
        required: true,
        label: label,
        onChange: onChange,
        value: value,
        name: name
    }), div);

    var requiredSymbol = div.querySelectorAll('.required-indicator');
    expect(requiredSymbol.length).toEqual(1);
});

it('renders invalid indicator', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_TextInput2.default, {
        valid: false,
        label: label,
        onChange: onChange,
        value: value,
        name: name
    }), div);

    var requiredSymbol = div.querySelectorAll('.invalid-indicator');
    expect(requiredSymbol.length).toEqual(1);
});
//# sourceMappingURL=TextInput.test.js.map