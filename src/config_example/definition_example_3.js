/**
 * Created by zkirilov on 23.3.2017 г..
 */

const definition = {
    isOpen: true,
    title: 'Please confirm',
    hasInvalids: false,
    overlay: false,
    fields: [{
        type: 'FreeText',
        name: 'Confirm',
        label: 'Are you sure you want to proceed?'
    }],
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
}

const data = {};

export default {
    definition,
    data
}


