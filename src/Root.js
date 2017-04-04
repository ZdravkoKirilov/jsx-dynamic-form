/**
 * Created by zkirilov on 21.3.2017 г..
 */

import React, {Component} from 'react';
import Modal from './components/Modal';
import validator from './utils/validator';

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, this.props.definition, {failedToValidate: false});
        this.onConfirm = this
            .onConfirm
            .bind(this);
        this.onCancel = this
            .onCancel
            .bind(this);
        this.onFieldModified = this
            .onFieldModified
            .bind(this);
    }

    componentWillReceiveProps(nextProps) {

        this.setState(Object.assign({}, nextProps.definition, {failedToValidate: false}));
    }

    render() {
        return (<Modal
            isOpen={this.state.isOpen}
            title={this.state.title}
            fields={this.state.fields}
            confirmButtonText={this.state.confirmButtonText}
            cancelButtonText={this.state.cancelButtonText}
            deleteButtonText={this.state.deleteButtonText}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
            onFieldModified={this.onFieldModified}
            hasInvalids={this.state.hasInvalids}
            overlay={this.state.overlay}
            data={this.props.data}/>);
    };

    /**
     * @function onFieldModified
     * Fired after a form field is modified by the user. Used to toggle UI validity indicators
     * @param {object[]} data
     */
    onFieldModified(data) {

        if (this.state.failedToValidate) {

            const validations = validator.validateData([...this.state.fields], data);

            const invalids = validations.filter(function (elem) {
                return !elem.valid;
            });

            if (invalids.length) {
                this.setState((prevState) => ({hasInvalids: true, fields: validations}));
            } else {
                this.setState((prevState) => ({hasInvalids: false, fields: validations}));
            }
        }
    }

    /**
     * @function onConfirm
     * @returns {boolean} hasInvalids
     * Fired after the Confirm button is clicked
     * The data which the user provided will be validated
     */
    onConfirm(data) {

        const validations = validator.validateData([...this.state.fields], data);
        const invalids = validations.filter(function (elem) {
            return !elem.valid;
        });

        if (invalids.length) {
            this.setState((prevState) => ({hasInvalids: true, failedToValidate: true, fields: validations}));
        } else {
            this.setState((prevState) => ({isOpen: false, hasInvalids: false, failedToValidate: false, fields: this.props.definition.fields}));

            if (this.props.onConfirmCallback) {
                this
                    .props
                    .onConfirmCallback(data);
            }
        }
        return invalids.length > 0;
    }

    /**
     * @function onCancel
     * Fired after the Cancel button is clicked
     */
    onCancel() {
        this.setState(prevState => ({isOpen: false, hasInvalids: false, failedToValidate: false, fields: this.props.definition.fields}));

        if (this.props.onCancelCallback) {
            this
                .props
                .onCancelCallback();
        }
    }
    /**
     * @function onDelete
     * Fired after the Delete button is clicked
     */
    onDelete() {
        this.setState(prevState => ({isOpen: false, hasInvalids: false, failedToValidate: false, fields: this.props.definition.fields}));

        if (this.props.onDeleteCallback) {
            this
                .props
                .onDeleteCallback();
        }
    }

    componentDidMount() {
        window.reactBridge = window.reactBridge || {};
        window.reactBridge.modal = this;
    }
}

Root.propTypes = {
    definition: React.PropTypes.object.isRequired,
    onConfirmCallback: React.PropTypes.func,
    onCancelCallback: React.PropTypes.func,
    onDeleteCallback: React.PropTypes.func,
    data: React.PropTypes.object
};
export default Root;
