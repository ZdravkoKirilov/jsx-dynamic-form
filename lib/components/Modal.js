'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Modal.css');

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

require('bootstrap/dist/css/bootstrap.min.css');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            data: {},
            shake: false
        };

        _this.onFieldModified = _this.onFieldModified.bind(_this);
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onCancel = _this.onCancel.bind(_this);
        _this.onAnimationEnd = _this.onAnimationEnd.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            var fields = this.createFields(this.props.fields);
            var warnings = this.createWarnings(this.props.hasInvalids);

            var style = this.props.isOpen ? {
                top: '20px'
            } : {
                top: '-1000px'
            };
            var overlayStyle = this.props.isOpen ? {
                height: '100%'
            } : {
                height: '0%'
            };

            var rootClass = this.state.shake === true ? 'modal-root shake' : 'modal-root';
            var overlay = this.props.overlay ? _react2.default.createElement('div', { className: 'modal-overlay', style: overlayStyle }) : null;

            var markup = _react2.default.createElement(
                'div',
                { className: 'modal-wrapper' },
                overlay,
                _react2.default.createElement(
                    'div',
                    { className: rootClass, style: style, onAnimationEnd: this.onAnimationEnd },
                    _react2.default.createElement(_Header2.default, { title: this.props.title, warnings: warnings }),
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-main' },
                        _react2.default.createElement(
                            'form',
                            null,
                            fields
                        )
                    ),
                    _react2.default.createElement(_Footer2.default, {
                        onConfirm: this.onConfirm,
                        confirmButtonText: this.props.confirmButtonText,
                        cancelButtonText: this.props.cancelButtonText,
                        onCancel: this.onCancel,
                        onDelete: this.onDelete,
                        deleteButtonText: this.props.deleteButtonText })
                )
            );

            return markup;
        }
    }, {
        key: 'createFields',


        /**
         * @function createFields
         * Dynamically creates an array of components based on provided type
         * @param {object[]} fields
         * @returns {object[]} React Components
         */
        value: function createFields(fields) {
            var self = this;
            var fieldsAsComponents = fields.map(function (item, index) {
                var currentValue = self.state.data[item.name] || '';

                var component = _factory2.default.createComponent(item.type, {
                    key: index,
                    name: item.name,
                    label: item.label,
                    onChange: self.onFieldModified,
                    options: item.options,
                    required: item.required,
                    valid: item.valid,
                    value: currentValue,
                    placeholder: item.placeholder
                });

                return component;
            });
            return fieldsAsComponents.length ? fieldsAsComponents : null;
        }

        /**
         * @function onAnimationEnd
         * Fired after the modal stops animating /it shakes if the user tries to submit invalid data /
         * Tells the modal to remove the css animation class
         */

    }, {
        key: 'onAnimationEnd',
        value: function onAnimationEnd() {
            this.setState(function (prevState) {
                return Object.assign({}, prevState, { shake: false });
            });
        }

        /**
         * @function createWarnings
         * @param {boolean} hasInvalids
         * @returns {object|null}
         */

    }, {
        key: 'createWarnings',
        value: function createWarnings(hasInvalids) {
            return hasInvalids ? _react2.default.createElement(
                'div',
                { className: 'modal-warnings' },
                'There are errors in the form'
            ) : null;
        }

        /**
         * @function onFieldModified
         * Fired each time a form input within the modal gets modified by the user / inputs, textareas, dropdowns etc /
         * @param {object} event
         */

    }, {
        key: 'onFieldModified',
        value: function onFieldModified(event) {
            var name = event.target.name;
            var value = event.target.value;

            this.setState(function (previousState) {
                var newState = Object.assign({}, previousState);
                var newData = Object.assign({}, newState.data);
                newData[name] = value;
                newState.data = newData;
                return newState;
            }, function () {
                if (this.props.onFieldModified) {
                    this.props.onFieldModified(this.state.data);
                }
            });
        }

        /**
         * @function onConfirm
         * Fired after the "Confirm" button is clicked
         */

    }, {
        key: 'onConfirm',
        value: function onConfirm() {
            var hasInvalids = this.props.onConfirm(Object.assign({}, this.state.data));
            if (hasInvalids) {
                this.setState(function (prevState) {
                    return Object.assign({}, prevState, { shake: true });
                });
            }
        }

        /**
         * @function onCancel
         * Fired after the "Cancel" button is clicked
         */

    }, {
        key: 'onCancel',
        value: function onCancel() {
            if (this.props.onCancel) {
                this.props.onCancel(Object.assign({}, this.state.data));
            }
        }

        /**
        * @function onDelete
        * Fired after the "Cancel" button is clicked
        */

    }, {
        key: 'onDelete',
        value: function onDelete() {
            if (this.props.onDelete) {
                this.props.onDelete(Object.assign({}, this.state.data));
            }
        }

        /**
         * @function componentWillMount
         * It's possible that the higher order component may pass already predefined data for the modal to display
         */

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var initialData = this.props.data ? Object.assign({}, this.props.data) : {};
            this.setState(function (prevState) {
                return Object.assign({}, prevState, { data: initialData });
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.isOpen !== this.props.isOpen) {
                var initialData = nextProps.data ? Object.assign({}, nextProps.data) : {};
                this.setState(function (prevState) {
                    return Object.assign({}, prevState, { data: initialData });
                });
            }
        }

        /**
         * @function componentWillUpdate
         * If the modal is going to be closed: reset the data which the user has entered before
         * @param {object} nextProps
         */

    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (nextProps.isOpen === false && this.props.isOpen === true) {
                this.setState(function (previousState) {
                    return Object.assign({}, previousState, { data: {} });
                });
            }
        }
    }]);

    return Modal;
}(_react.Component);

Modal.defaultProps = {
    isOpen: false,
    fields: [],
    confirmButtonText: 'Confirm'
};

Modal.propTypes = {
    isOpen: _react2.default.PropTypes.bool.isRequired,
    onConfirm: _react2.default.PropTypes.func.isRequired,
    title: _react2.default.PropTypes.string.isRequired,
    onCancel: _react2.default.PropTypes.func,
    hasInvalids: _react2.default.PropTypes.bool,
    onFieldModified: _react2.default.PropTypes.func,
    onAnimationEnd: _react2.default.PropTypes.func,
    fields: _react2.default.PropTypes.array, // array of data which will be transformed into React Form Components
    confirmButtonText: _react2.default.PropTypes.string, //what the user sees as the name of the button
    cancelButtonText: _react2.default.PropTypes.string, //what the user sees as the name of the button
    deleteButtonText: _react2.default.PropTypes.string,
    onDelete: _react2.default.PropTypes.func,
    shake: _react2.default.PropTypes.bool
};

exports.default = Modal;
module.exports = exports['default'];
//# sourceMappingURL=Modal.js.map