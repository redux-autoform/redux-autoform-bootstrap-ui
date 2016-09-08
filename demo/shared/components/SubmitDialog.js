import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SubmitDialog extends Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        args: PropTypes.any
    };

    render() {
        const { open, handleClose, args } = this.props;

        if (open) {
            return (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Submit Values</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="submit-dialog">
                            <pre className="roboto">
                                {JSON.stringify(args[0], null, 2)}
                            </pre>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Hide</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            );
        }

        return false;
    }
}

export default SubmitDialog;