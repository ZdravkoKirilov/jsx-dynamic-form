/**
 * Created by zkirilov on 23.3.2017 г..
 */
import React from 'react';

function ModalFooter(props) {
    const cancelButton = props.cancelButtonText
        ? <button className="btn btn-default cancel" onClick={props.onCancel}>
                {props.cancelButtonText}
            </button>
        : null;

    const deleteButton = props.deleteButtonText
        ? <button className="btn btn-danger delete" onClick={props.onDelete}>
                {props.deleteButtonText}
            </button>
        : null;

    return <div className="modal-footer">

        <div className="left-area">
            {deleteButton}
        </div>

        <div className="right-area">
            <button className="btn btn-success confirm" onClick={props.onConfirm}>
                {props.confirmButtonText}
            </button>

            {cancelButton}
        </div>

    </div>
}

ModalFooter.propTypes = {
    onConfirm: React.PropTypes.func.isRequired,
    confirmButtonText: React.PropTypes.string.isRequired,
    cancelButtonText: React.PropTypes.string,
    onCancel: React.PropTypes.func,
    deleteButtonText: React.PropTypes.string,
    onDelete: React.PropTypes.func
};

export default ModalFooter;
