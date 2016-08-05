import React, { Component } from 'react';
import { ControlLabel } from 'react-bootstrap';

class FormGroupInlineControlLabel extends Component {
    static propTypes = {
        displayName: React.PropTypes.string,
        required: React.PropTypes.bool
    };

    render() {
        let { displayName, required } = this.props;

        if (displayName == null) {
            return null;
        }

        // this will add a star on fields that are required
        let requiredStar = required ?  <span className="required-star">*</span> : null;

        return (
            <div className="col-fixed-140">
                <ControlLabel>
                    { displayName } {requiredStar}
                </ControlLabel>
            </div>
        )
    }
}

export default FormGroupInlineControlLabel;