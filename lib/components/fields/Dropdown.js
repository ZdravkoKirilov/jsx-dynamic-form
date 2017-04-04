'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropdown(props) {
    var options = props.options.map(function (item) {
        return _react2.default.createElement(
            'option',
            { value: item.value, key: item.value },
            item.display
        );
    });
    var isRequired = props.required ? _react2.default.createElement(
        'span',
        { className: 'required-indicator' },
        ' * '
    ) : null;
    var isInvalid = props.valid !== false ? 'form-control' : 'form-control invalid-indicator';

    return _react2.default.createElement(
        'div',
        { className: 'form-group dropdown' },
        _react2.default.createElement(
            'label',
            null,
            props.label
        ),
        isRequired,
        _react2.default.createElement(
            'select',
            {
                className: isInvalid,
                onChange: props.onChange,
                name: props.name,
                value: props.value
            },
            options
        )
    );
} /**
   * Created by zkirilov on 21.3.2017 г..
   */

Dropdown.propTypes = {
    options: _react2.default.PropTypes.array.isRequired,
    label: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    name: _react2.default.PropTypes.string.isRequired,
    value: _react2.default.PropTypes.string,
    required: _react2.default.PropTypes.bool,
    valid: _react2.default.PropTypes.bool
};

exports.default = Dropdown;
module.exports = exports['default'];
//# sourceMappingURL=Dropdown.js.map