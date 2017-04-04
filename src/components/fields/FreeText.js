/**
 * Created by zkirilov on 23.3.2017 г..
 */

import React from 'react';

function FreeText(props) {
    return (
        <div className="form-group freetext">
            <p className="free-text">
                {props.label}
            </p>
        </div>
    );
}

FreeText.propTypes = {
    label: React.PropTypes.string.isRequired
};

export default FreeText;
