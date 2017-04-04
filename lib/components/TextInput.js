"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Text;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Text(props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "label",
            null,
            props.label
        ),
        _react2.default.createElement("input", { type: "text" })
    );
} /**
   * Created by zkirilov on 21.3.2017 г..
   */

module.exports = exports["default"];
//# sourceMappingURL=TextInput.js.map