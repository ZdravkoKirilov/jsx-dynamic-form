"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FreeText(props) {
    return _react2.default.createElement(
        "div",
        { className: "form-group freetext" },
        _react2.default.createElement(
            "p",
            { className: "free-text" },
            props.label
        )
    );
} /**
   * Created by zkirilov on 23.3.2017 г..
   */

FreeText.propTypes = {
    label: _react2.default.PropTypes.string.isRequired
};

exports.default = FreeText;
module.exports = exports["default"];
//# sourceMappingURL=FreeText.js.map