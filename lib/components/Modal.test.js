'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _reactAddonsTestUtils = require('react-addons-test-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onConfirm = function onConfirm() {
    return 'some value';
};

it('renders without crashing', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm
    }), div);
});

it('renders outside screen when closed', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm,
        isOpen: false
    }), div);

    var modal = div.querySelector('.modal-root');
    expect(modal.style.top).toEqual('-1000px');
});

it('renders inside screen when opened', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm,
        isOpen: true
    }), div);

    var modal = div.querySelector('.modal-root');
    expect(modal.style.top).not.toContain('-');
});

it('renders invalid indicator', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm,
        hasInvalids: true
    }), div);

    var warnings = div.querySelectorAll('.modal-warnings');
    expect(warnings.length).toEqual(1);
});

it('invokes onConfirm function when Confirm button is clicked', function () {
    var div = document.createElement('div');
    var onConfirm = jest.fn();

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm
    }), div);

    var button = div.querySelector('.modal-root .confirm');
    _reactAddonsTestUtils.Simulate.click(button);

    expect(onConfirm).toHaveBeenCalled();
});

it('invokes onCancel function when Cancel button is clicked', function () {
    var div = document.createElement('div');
    var onCancel = jest.fn();

    _reactDom2.default.render(_react2.default.createElement(_Modal2.default, {
        title: 'Hello World',
        onConfirm: onConfirm,
        onCancel: onCancel,
        cancelButtonText: 'Cancel'
    }), div);

    var button = div.querySelector('.modal-root .cancel');
    _reactAddonsTestUtils.Simulate.click(button);

    expect(onCancel).toHaveBeenCalled();
});
//# sourceMappingURL=Modal.test.js.map