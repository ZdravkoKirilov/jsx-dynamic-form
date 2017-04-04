'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NumberInput(props) {

    var isRequired = props.required ? _react2.default.createElement(
        'span',
        { className: 'required-indicator' },
        ' * '
    ) : null;
    var isInvalid = props.valid !== false ? 'form-control' : 'form-control invalid-indicator';

    return _react2.default.createElement(
        'div',
        { className: 'form-group numberinput' },
        _react2.default.createElement(
            'label',
            null,
            props.label
        ),
        isRequired,
        _react2.default.createElement('input', {
            className: isInvalid,
            type: 'number',
            onChange: props.onChange,
            name: props.name,
            value: props.value
        })
    );
} /**
   * Created by zkirilov on 24.3.2017 г..
   */

NumberInput.propTypes = {
    label: _react2.default.PropTypes.string.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    name: _react2.default.PropTypes.string.isRequired,
    value: _react2.default.PropTypes.any,
    valid: _react2.default.PropTypes.bool,
    required: _react2.default.PropTypes.bool
};

exports.default = NumberInput;
module.exports = exports['default'];
//# sourceMappingURL=NumberInput.js.map