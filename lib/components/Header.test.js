'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = "Hello World"; /**
                            * Created by zkirilov on 24.3.2017 г..
                            */

var warning = _react2.default.createElement(
    'div',
    { className: 'modal-warnings' },
    'There are errors in the form'
);

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_Header2.default, {
        title: title
    }), div);
});

it('renders correct title', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Header2.default, {
        title: title
    }), div);

    var actualTitle = div.querySelector('.modal-title');

    expect(actualTitle.textContent).toEqual(title);
});

it('renders without warning when warning prop is not provided', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Header2.default, {
        title: title
    }), div);

    var renderedWarning = div.querySelectorAll('.modal-warnings');

    expect(renderedWarning.length).toEqual(0);
});

it('renders a warning when warning prop is provided', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Header2.default, {
        title: title,
        warnings: warning
    }), div);

    var renderedWarning = div.querySelectorAll('.modal-warnings');

    expect(renderedWarning.length).toEqual(1);
});
//# sourceMappingURL=Header.test.js.map