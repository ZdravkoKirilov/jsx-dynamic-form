/**
 * Created by zkirilov on 23.3.2017 г..
 */

import TextInput from './fields/TextInput';
import NumberInput from './fields/NumberInput';
import TextArea from './fields/TextArea';
import Dropdown from './fields/Dropdown';
import FreeText from './fields/FreeText';
import React from 'react';

export default {
    TextInput(props) {
        return <TextInput
            key={props.key}
            name={props.name}
            label={props.label}
            onChange={props.onChange}
            required={props.required}
            valid={props.valid}
            value={props.value}
            placeholder={props.placeholder}
        />
    },
    NumberInput(props) {
        return <NumberInput
            key={props.key}
            name={props.name}
            label={props.label}
            onChange={props.onChange}
            required={props.required}
            valid={props.valid}
            value={props.value}
            placeholder={props.placeholder}
        />
    },
    TextArea(props) {
        return <TextArea
            key={props.key}
            name={props.name}
            label={props.label}
            onChange={props.onChange}
            required={props.required}
            valid={props.valid}
            value={props.value}
            placeholder={props.placeholder}
        />
    },
    Dropdown(props) {
        return <Dropdown
            key={props.key}
            name={props.name}
            label={props.label}
            onChange={props.onChange}
            options={props.options}
            required={props.required}
            valid={props.valid}
            value={props.value}
        />
    },
    FreeText(props) {
        return <FreeText
            name={props.name}
            label={props.label}
            key={props.key}
        />
    },
    createComponent(type, props) {
        const constructor = this[type];
        const component = constructor(props) || null;
        return component;
    }
}
