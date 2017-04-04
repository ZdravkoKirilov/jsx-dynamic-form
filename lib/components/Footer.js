"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalFooter(props) {
    var cancelButton = props.cancelButtonText ? _react2.default.createElement(
        "button",
        { className: "btn btn-default cancel", onClick: props.onCancel },
        props.cancelButtonText
    ) : null;

    var deleteButton = props.deleteButtonText ? _react2.default.createElement(
        "button",
        { className: "btn btn-danger delete", onClick: props.onDelete },
        props.deleteButtonText
    ) : null;

    return _react2.default.createElement(
        "div",
        { className: "modal-footer" },
        _react2.default.createElement(
            "div",
            { className: "left-area" },
            deleteButton
        ),
        _react2.default.createElement(
            "div",
            { className: "right-area" },
            _react2.default.createElement(
                "button",
                { className: "btn btn-success confirm", onClick: props.onConfirm },
                props.confirmButtonText
            ),
            cancelButton
        )
    );
} /**
   * Created by zkirilov on 23.3.2017 г..
   */


ModalFooter.propTypes = {
    onConfirm: _react2.default.PropTypes.func.isRequired,
    confirmButtonText: _react2.default.PropTypes.string.isRequired,
    cancelButtonText: _react2.default.PropTypes.string,
    onCancel: _react2.default.PropTypes.func,
    deleteButtonText: _react2.default.PropTypes.string,
    onDelete: _react2.default.PropTypes.func
};

exports.default = ModalFooter;
module.exports = exports["default"];
//# sourceMappingURL=Footer.js.map