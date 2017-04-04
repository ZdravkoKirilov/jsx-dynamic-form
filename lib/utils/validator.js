"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zkirilov on 22.3.2017 г..
 */

exports.default = {
    isNumber: function isNumber(value) {},
    isString: function isString(value) {},
    isEmpty: function isEmpty(value) {

        var asString = value ? String(value).trim() : value;
        return !Boolean(asString);
    },
    validateData: function validateData(definitions, data) {
        var self = this;

        var results = definitions.map(function (elem) {
            var isValid = true;
            var value = data[elem.name];
            if (elem.required && self.isEmpty(value)) {
                isValid = false;
            }
            return Object.assign({}, elem, { valid: isValid });
        });

        return results;
    }
};
module.exports = exports["default"];