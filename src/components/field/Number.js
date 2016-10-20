import React, { Component, PropTypes } from 'react';
import Input from  '../common/Input';

class Number extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string,
        fieldLayout: PropTypes.string
    };

    render() {
        return <Input componentClass="input" inputType="number" {...this.props}/>;
    }
}

export default Number;