/**
 * Created by zkirilov on 24.3.2017 г..
 */

import React from 'react';

function NumberInput(props) {

    const isRequired = props.required ? <span className="required-indicator"> * </span> : null;
    const isInvalid = props.valid !== false ? 'form-control' : 'form-control invalid-indicator';

    return (
        <div className="form-group numberinput">
            <label>{props.label}</label>
            {isRequired}
            <input
                className={isInvalid}
                type="number"
                onChange={props.onChange}
                name={props.name}
                value={props.value}
            />
        </div>
    );
}

NumberInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any,
    valid: React.PropTypes.bool,
    required: React.PropTypes.bool
};

export default NumberInput;
