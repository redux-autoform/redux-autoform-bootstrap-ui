import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import ReactSelect from 'react-select-plus';
import fetch from 'isomorphic-fetch';

class Select extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string
    };

    getOptions = () => {
        let { options } = this.props;

        return options.map((item, index) => (
            <option key={index} value={item.value}>
                {item.text}
            </option>
        ));
    };

    fetchItems = () => {
        const { options } = this.props;

        return fetch(options.url)
            .then(response => response.json())
            .then(json => {
                return { options: json }
            });
    };

    render() {
        let { value, name, displayName, help, error, touched, onChange, onBlur, fieldLayout, options } = this.props;
        let formGroupProps = { error, touched, displayName, name, help, fieldLayout };

        if (options && Array.isArray(options)) {
            return (
                <Input componentClass="select" {...this.props}>
                    { this.getOptions() }
                </Input>
            );
            
        } else if (options.url) {
            let selectProps = {
                value,
                name,
                onChange,
                onBlur: (event) => onBlur(),
                valueKey: options.value? options.value : 'value',
                labelKey: options.label? options.label : 'label'
            };

            return (
                <FormGroup {...formGroupProps}>
                    <ReactSelect.Async {...selectProps} loadOptions={this.fetchItems}/>
                </FormGroup>
            );
        }

        return false;
    }
}

export default Select;