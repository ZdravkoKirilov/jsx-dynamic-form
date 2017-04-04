'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ display: 'One', value: '1' }, { display: 'Two', value: '2' }, { display: 'Three', value: '3' }]; /**
                                                                                                                   * Created by zkirilov on 24.3.2017 г..
                                                                                                                   */


var label = 'Hello World';
var onChange = function onChange() {
    return 'Hello World';
};
var name = 'Some field';
var value = 'Hello World';

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        name: name,
        value: value,
        onChange: onChange,
        label: label
    }), div);
});

it('renders correct options', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        name: name,
        value: value,
        onChange: onChange,
        label: label
    }), div);
    var dom_options = div.querySelectorAll('option');

    expect(dom_options[0].value).toEqual(options[0].value);
    expect(dom_options[1].value).toEqual(options[1].value);
    expect(dom_options[2].value).toEqual(options[2].value);
});

it('renders correct label', function () {
    var div = document.createElement('div');
    var expectedLabel = "Some label";

    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        label: expectedLabel,
        name: name,
        value: value,
        onChange: onChange
    }), div);

    var actualLabel = div.querySelector('label');

    expect(actualLabel.textContent).toEqual(expectedLabel);
});

it('renders correct value', function () {
    var div = document.createElement('div');
    var chosenValue = options[1].value;

    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        value: chosenValue,
        name: name,
        onChange: onChange,
        label: label
    }), div);

    var actualValue = div.querySelector('select').value;

    expect(actualValue).toEqual(chosenValue);
});

it('renders required indicator', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        required: true,
        name: name,
        value: value,
        onChange: onChange,
        label: label
    }), div);

    var requiredSymbol = div.querySelectorAll('.required-indicator');
    expect(requiredSymbol.length).toEqual(1);
});

it('renders invalid indicator', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Dropdown2.default, {
        options: options,
        valid: false,
        name: name,
        value: value,
        onChange: onChange,
        label: label
    }), div);

    var requiredSymbol = div.querySelectorAll('.invalid-indicator');
    expect(requiredSymbol.length).toEqual(1);
});
//# sourceMappingURL=Dropdown.test.js.map