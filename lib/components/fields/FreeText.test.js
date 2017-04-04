'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FreeText = require('./FreeText');

var _FreeText2 = _interopRequireDefault(_FreeText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var label = "Hello World"; /**
                            * Created by zkirilov on 24.3.2017 г..
                            */

it('renders without crashing', function () {
    var div = document.createElement('div');
    _reactDom2.default.render(_react2.default.createElement(_FreeText2.default, {
        label: 'some label'
    }), div);
});

it('renders correct label', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_FreeText2.default, {
        label: label
    }), div);

    var actualLabel = div.querySelector('.free-text');

    expect(actualLabel.textContent).toEqual(label);
});
//# sourceMappingURL=FreeText.test.js.map