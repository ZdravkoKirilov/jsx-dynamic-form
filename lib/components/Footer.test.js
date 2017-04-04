'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onConfirm = function onConfirm() {
    return 'Hello World';
}; /**
    * Created by zkirilov on 24.3.2017 г..
    */

var onCancel = function onCancel() {
    return 'Hello World';
};
var confirmButtonText = 'Confirm';
var cancelButtonText = 'Cancel';

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_Footer2.default, {
        onConfirm: onConfirm,
        onCancel: onCancel,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    }), div);
});

it('renders a Confirm Button', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Footer2.default, {
        onConfirm: onConfirm,
        confirmButtonText: confirmButtonText
    }), div);

    var button = div.querySelectorAll('.confirm');

    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(confirmButtonText);
});

it('renders only a Confirm Button if cancelButtonText prop is not provided', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Footer2.default, {
        onConfirm: onConfirm,
        confirmButtonText: confirmButtonText
    }), div);

    var button = div.querySelectorAll('.cancel');
    var confirm = div.querySelectorAll('.confirm');

    expect(button.length).toEqual(0);
    expect(confirm.length).toEqual(1);
});

it('renders a Cancel Button if cancelButtonText prop is provided', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Footer2.default, {
        onConfirm: onConfirm,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        onCancel: onCancel
    }), div);

    var button = div.querySelectorAll('.cancel');

    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(cancelButtonText);
});
//# sourceMappingURL=Footer.test.js.map