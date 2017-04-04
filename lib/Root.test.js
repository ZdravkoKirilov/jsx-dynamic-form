'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = {
    title: 'Hello World',
    confirmButtonText: 'Confirm',
    fields: [{
        type: 'TextInput',
        name: 'Text',
        label: 'Hello World'
    }, {
        type: 'Dropdown',
        name: 'Dropdown',
        label: 'Hello World 2',
        options: [{
            display: 'Two',
            value: 'Dve'
        }, {
            display: 'One',
            value: 'Edno'
        }]
    }, {
        type: 'TextArea',
        name: 'TextArea',
        label: 'Desc'
    }, {
        type: 'NumberInput',
        name: 'Number',
        label: 'Enter Number'
    }, {
        type: 'FreeText',
        name: 'Free',
        label: 'Free'
    }]
}; /**
    * Created by zkirilov on 24.3.2017 г..
    */

it('renders without crashing', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);
});

it('renders correct title', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);

    var title = div.querySelector('.modal-title');
    expect(title.textContent).toEqual(definition.title);
});

it('renders correct confirm button', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);

    var button = div.querySelectorAll('.confirm');
    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(definition.confirmButtonText);
});

it('should not render a cancel button if it does not appear in definition', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);

    var button = div.querySelectorAll('.cancel');
    expect(button.length).toEqual(0);
});

it('should render a cancel button if it appears in definition', function () {
    var div = document.createElement('div');

    var definition = {
        title: 'Hello World',
        cancelButtonText: 'Cancel'
    };

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);

    var button = div.querySelectorAll('.cancel');
    expect(button.length).toEqual(1);
    expect(button[0].textContent).toEqual(definition.cancelButtonText);
});

it('should render correct fields from definition', function () {
    var div = document.createElement('div');

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition
    }), div);

    var text = div.querySelectorAll('.textinput');
    var dropdown = div.querySelectorAll('.dropdown');

    expect(text.length).toEqual(1);
    expect(dropdown.length).toEqual(1);
});

it('should prepopulate correct data', function () {
    var div = document.createElement('div');

    var data = {
        Text: 'Some value',
        Dropdown: 'Dve',
        Number: 5.55,
        TextArea: 'Big text'
    };

    _reactDom2.default.render(_react2.default.createElement(_Root2.default, {
        definition: definition,
        data: data
    }), div);

    var text = div.querySelector('.textinput input');
    var dropdown = div.querySelector('.dropdown select');
    var number = div.querySelector('.numberinput input');
    var textarea = div.querySelector('.textareainput textarea');

    expect(text.value).toEqual(data.Text);
    expect(dropdown.value).toEqual(data.Dropdown);
    expect(Number(number.value)).toEqual(data.Number);
    expect(textarea.value).toEqual(data.TextArea);
});
//# sourceMappingURL=Root.test.js.map