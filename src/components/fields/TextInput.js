/**
 * Created by zkirilov on 21.3.2017 г..
 */

import React from 'react';

function TextInput(props) {

    const isRequired = props.required ? <span className="required-indicator"> * </span> : null;
    const isInvalid = props.valid !== false ? 'form-control' : 'form-control invalid-indicator';
    return (
        <div className="form-group textinput">
            <label>{props.label}</label>
            {isRequired}
            <input
                className={isInvalid}
                type="text"
                onChange={props.onChange}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    );
}

TextInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    valid: React.PropTypes.bool,
    required: React.PropTypes.bool,
    placeholder: React.PropTypes.string
};

export default TextInput;
