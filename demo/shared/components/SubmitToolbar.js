import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button }from 'react-bootstrap';

class SubmitToolbar extends Component {
	static propTypes = {
		pristine: PropTypes.bool.isRequired,
		submitting: PropTypes.bool.isRequired,
		errors: PropTypes.array.isRequired
	};
	
	render() {
	    let { pristine, submitting, errors } = this.props;
	    let disabled = !!(pristine || errors.length > 0 || submitting);

        return (
            <ButtonToolbar className="button-toolbar">
                <Button className="pull-right" bsStyle="success" type="submit"  disabled={disabled}>
                    Submit
                </Button>
            </ButtonToolbar>
        );
    }
}

export default SubmitToolbar;