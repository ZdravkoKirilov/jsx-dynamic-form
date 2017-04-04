/**
 * Created by zkirilov on 23.3.2017 г..
 */

import React from 'react';

function ModalHeader(props) {

    return <div className="modal-header">

        <h3 className="modal-title">{props.title}</h3>

        {props.warnings}
    </div>
}

ModalHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    warnings: React.PropTypes.object
};

export default ModalHeader;
