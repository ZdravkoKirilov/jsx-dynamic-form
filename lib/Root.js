'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _validator = require('./utils/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zkirilov on 21.3.2017 г..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Root = function (_Component) {
    _inherits(Root, _Component);

    function Root(props) {
        _classCallCheck(this, Root);

        var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

        _this.state = Object.assign({}, _this.props.definition, { failedToValidate: false });
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onCancel = _this.onCancel.bind(_this);
        _this.onFieldModified = _this.onFieldModified.bind(_this);
        return _this;
    }

    _createClass(Root, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {

            this.setState(Object.assign({}, nextProps.definition, { failedToValidate: false }));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Modal2.default, {
                isOpen: this.state.isOpen,
                title: this.state.title,
                fields: this.state.fields,
                confirmButtonText: this.state.confirmButtonText,
                cancelButtonText: this.state.cancelButtonText,
                deleteButtonText: this.state.deleteButtonText,
                onConfirm: this.onConfirm,
                onCancel: this.onCancel,
                onFieldModified: this.onFieldModified,
                hasInvalids: this.state.hasInvalids,
                overlay: this.state.overlay,
                data: this.props.data });
        }
    }, {
        key: 'onFieldModified',


        /**
         * @function onFieldModified
         * Fired after a form field is modified by the user. Used to toggle UI validity indicators
         * @param {object[]} data
         */
        value: function onFieldModified(data) {

            if (this.state.failedToValidate) {

                var validations = _validator2.default.validateData([].concat(_toConsumableArray(this.state.fields)), data);

                var invalids = validations.filter(function (elem) {
                    return !elem.valid;
                });

                if (invalids.length) {
                    this.setState(function (prevState) {
                        return { hasInvalids: true, fields: validations };
                    });
                } else {
                    this.setState(function (prevState) {
                        return { hasInvalids: false, fields: validations };
                    });
                }
            }
        }

        /**
         * @function onConfirm
         * @returns {boolean} hasInvalids
         * Fired after the Confirm button is clicked
         * The data which the user provided will be validated
         */

    }, {
        key: 'onConfirm',
        value: function onConfirm(data) {
            var _this2 = this;

            var validations = _validator2.default.validateData([].concat(_toConsumableArray(this.state.fields)), data);
            var invalids = validations.filter(function (elem) {
                return !elem.valid;
            });

            if (invalids.length) {
                this.setState(function (prevState) {
                    return { hasInvalids: true, failedToValidate: true, fields: validations };
                });
            } else {
                this.setState(function (prevState) {
                    return { isOpen: false, hasInvalids: false, failedToValidate: false, fields: _this2.props.definition.fields };
                });

                if (this.props.onConfirmCallback) {
                    this.props.onConfirmCallback(data);
                }
            }
            return invalids.length > 0;
        }

        /**
         * @function onCancel
         * Fired after the Cancel button is clicked
         */

    }, {
        key: 'onCancel',
        value: function onCancel() {
            var _this3 = this;

            this.setState(function (prevState) {
                return { isOpen: false, hasInvalids: false, failedToValidate: false, fields: _this3.props.definition.fields };
            });

            if (this.props.onCancelCallback) {
                this.props.onCancelCallback();
            }
        }
        /**
         * @function onDelete
         * Fired after the Delete button is clicked
         */

    }, {
        key: 'onDelete',
        value: function onDelete() {
            var _this4 = this;

            this.setState(function (prevState) {
                return { isOpen: false, hasInvalids: false, failedToValidate: false, fields: _this4.props.definition.fields };
            });

            if (this.props.onDeleteCallback) {
                this.props.onDeleteCallback();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.reactBridge = window.reactBridge || {};
            window.reactBridge.modal = this;
        }
    }]);

    return Root;
}(_react.Component);

Root.propTypes = {
    definition: _react2.default.PropTypes.object.isRequired,
    onConfirmCallback: _react2.default.PropTypes.func,
    onCancelCallback: _react2.default.PropTypes.func,
    onDeleteCallback: _react2.default.PropTypes.func,
    data: _react2.default.PropTypes.object
};
exports.default = Root;
module.exports = exports['default'];
//# sourceMappingURL=Root.js.map