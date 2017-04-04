/**
 * Created by zkirilov on 21.3.2017 г..
 */

import React from 'react';

export default function Text(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text"/>
        </div>
    );
}
