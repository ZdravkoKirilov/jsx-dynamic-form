/**
 * Created by zkirilov on 21.3.2017 г..
 */

import React from 'react';

function Dropdown(props) {
    const options = props.options.map((item) => <option value={item.value} key={item.value}>{item.display}</option>);
    const isRequired = props.required ? <span className="required-indicator"> * </span> : null;
    const isInvalid = props.valid !== false ? 'form-control' : 'form-control invalid-indicator';

    return (
        <div className="form-group dropdown">
            <label>{props.label}</label>
            {isRequired}
            <select
                className={isInvalid}
                onChange={props.onChange}
                name={props.name}
                value={props.value}
            >
                {options}
            </select>
        </div>
    );
}

Dropdown.propTypes = {
    options: React.PropTypes.array.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    required: React.PropTypes.bool,
    valid: React.PropTypes.bool
};

export default Dropdown;
