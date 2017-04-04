"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalHeader(props) {

    return _react2.default.createElement(
        "div",
        { className: "modal-header" },
        _react2.default.createElement(
            "h3",
            { className: "modal-title" },
            props.title
        ),
        props.warnings
    );
} /**
   * Created by zkirilov on 23.3.2017 г..
   */

ModalHeader.propTypes = {
    title: _react2.default.PropTypes.string.isRequired,
    warnings: _react2.default.PropTypes.object
};

exports.default = ModalHeader;
module.exports = exports["default"];
//# sourceMappingURL=Header.js.map