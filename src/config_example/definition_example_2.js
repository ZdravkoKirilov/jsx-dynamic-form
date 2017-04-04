/**
 * Created by zkirilov on 23.3.2017 г..
 */

const definition = {
    title: 'Application Form',
    hasInvalids: false,
    overlay: true,
    fields: [{
        type: 'TextInput',
        name: 'Name',
        label: 'Name',
        value: '',
        required: true
    }, {
        type: 'NumberInput',
        name: 'Age',
        label: 'Age',
        value: '',
        required: true
    }],
    confirmButtonText: 'Update',
    cancelButtonText: 'Cancel',
    deleteButtonText: 'Delete'
};

const data = {
    Name: 'Leonardo',
    Age: 24
};

export default {
    definition,
    data
}
