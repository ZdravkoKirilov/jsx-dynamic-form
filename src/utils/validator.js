/**
 * Created by zkirilov on 22.3.2017 г..
 */

export default {
    isNumber(value) {

    },

    isString(value) {

    },

    isEmpty(value) {

        const asString = value ? String(value).trim() : value;
        return !Boolean(asString);
    },

    validateData(definitions, data) {
        const self = this;

        const results = definitions.map(function (elem) {
            let isValid = true;
            let value = data[elem.name];
            if (elem.required && self.isEmpty(value)) {
                isValid = false;
            }
            return Object.assign({}, elem, {valid: isValid});

        });

        return results;
    }
}
