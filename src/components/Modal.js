import React, {Component} from 'react';
import './Modal.css';
import factory from './factory';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalHeader from './Header';
import ModalFooter from './Footer';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            shake: false
        };

        this.onFieldModified = this
            .onFieldModified
            .bind(this);
        this.onConfirm = this
            .onConfirm
            .bind(this);
        this.onCancel = this
            .onCancel
            .bind(this);
        this.onAnimationEnd = this
            .onAnimationEnd
            .bind(this);
        this.onDelete = this
            .onDelete
            .bind(this);
    };

    render = () => {
        const fields = this.createFields(this.props.fields);
        const warnings = this.createWarnings(this.props.hasInvalids);

        const style = this.props.isOpen
            ? {
                top: '20px'
            }
            : {
                top: '-1000px'
            };
        const overlayStyle = this.props.isOpen
            ? {
                height: '100%'
            }
            : {
                height: '0%'
            };

        const rootClass = this.state.shake === true
            ? 'modal-root shake'
            : 'modal-root';
        const overlay = this.props.overlay
            ? <div className="modal-overlay" style={overlayStyle}></div>
            : null;

        const markup = <div className="modal-wrapper">

            {overlay}
            <div className={rootClass} style={style} onAnimationEnd={this.onAnimationEnd}>

                <ModalHeader title={this.props.title} warnings={warnings}/>

                <div className="modal-main">
                    <form>
                        {fields}
                    </form>
                </div>

                <ModalFooter
                    onConfirm={this.onConfirm}
                    confirmButtonText={this.props.confirmButtonText}
                    cancelButtonText={this.props.cancelButtonText}
                    onCancel={this.onCancel}
                    onDelete={this.onDelete}
                    deleteButtonText={this.props.deleteButtonText}/>
            </div>
        </div>;

        return markup;
    };

    /**
     * @function createFields
     * Dynamically creates an array of components based on provided type
     * @param {object[]} fields
     * @returns {object[]} React Components
     */
    createFields(fields) {
        const self = this;
        const fieldsAsComponents = fields.map(function (item, index) {
            const currentValue = self.state.data[item.name] || '';

            const component = factory.createComponent(item.type, {
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
        return fieldsAsComponents.length
            ? fieldsAsComponents
            : null;
    }

    /**
     * @function onAnimationEnd
     * Fired after the modal stops animating /it shakes if the user tries to submit invalid data /
     * Tells the modal to remove the css animation class
     */
    onAnimationEnd() {
        this
            .setState(function (prevState) {
                return Object.assign({}, prevState, {shake: false});
            });
    }

    /**
     * @function createWarnings
     * @param {boolean} hasInvalids
     * @returns {object|null}
     */
    createWarnings(hasInvalids) {
        return hasInvalids
            ? <div className="modal-warnings">There are errors in the form</div>
            : null;
    }

    /**
     * @function onFieldModified
     * Fired each time a form input within the modal gets modified by the user / inputs, textareas, dropdowns etc /
     * @param {object} event
     */
    onFieldModified(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(function (previousState) {
            const newState = Object.assign({}, previousState);
            const newData = Object.assign({}, newState.data);
            newData[name] = value;
            newState.data = newData;
            return newState;
        }, function () {
            if (this.props.onFieldModified) {
                this
                    .props
                    .onFieldModified(this.state.data);
            }
        });
    }

    /**
     * @function onConfirm
     * Fired after the "Confirm" button is clicked
     */
    onConfirm() {
        const hasInvalids = this
            .props
            .onConfirm(Object.assign({}, this.state.data));
        if (hasInvalids) {
            this
                .setState(function (prevState) {
                    return Object.assign({}, prevState, {shake: true});
                });
        }
    }

    /**
     * @function onCancel
     * Fired after the "Cancel" button is clicked
     */
    onCancel() {
        if (this.props.onCancel) {
            this
                .props
                .onCancel(Object.assign({}, this.state.data));
        }
    }

    /**
    * @function onDelete
    * Fired after the "Cancel" button is clicked
    */
    onDelete() {
        if (this.props.onDelete) {
            this
                .props
                .onDelete(Object.assign({}, this.state.data));
        }
    }

    /**
     * @function componentWillMount
     * It's possible that the higher order component may pass already predefined data for the modal to display
     */
    componentWillMount() {
        const initialData = this.props.data
            ? Object.assign({}, this.props.data)
            : {};
        this.setState(function (prevState) {
            return Object.assign({}, prevState, {data: initialData});
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.props.isOpen) {
            const initialData = nextProps.data
                ? Object.assign({}, nextProps.data)
                : {};
            this.setState(function (prevState) {
                return Object.assign({}, prevState, {data: initialData});
            });
        }
    }

    /**
     * @function componentWillUpdate
     * If the modal is going to be closed: reset the data which the user has entered before
     * @param {object} nextProps
     */
    componentWillUpdate(nextProps) {
        if (nextProps.isOpen === false && this.props.isOpen === true) {
            this
                .setState(function (previousState) {
                    return Object.assign({}, previousState, {data: {}});
                });
        }
    }
}

Modal.defaultProps = {
    isOpen: false,
    fields: [],
    confirmButtonText: 'Confirm'
};

Modal.propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    onConfirm: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    onCancel: React.PropTypes.func,
    hasInvalids: React.PropTypes.bool,
    onFieldModified: React.PropTypes.func,
    onAnimationEnd: React.PropTypes.func,
    fields: React.PropTypes.array, // array of data which will be transformed into React Form Components
    confirmButtonText: React.PropTypes.string, //what the user sees as the name of the button
    cancelButtonText: React.PropTypes.string, //what the user sees as the name of the button
    deleteButtonText: React.PropTypes.string,
    onDelete: React.PropTypes.func,
    shake: React.PropTypes.bool
};

export default Modal;
