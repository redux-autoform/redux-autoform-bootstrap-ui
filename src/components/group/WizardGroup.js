import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

import { Button, Row, Col, ButtonToolbar } from 'react-bootstrap';

class WizardGroup extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired,
        buttonBar: PropTypes.func
    };

    state = {
        position: 0,
        totalSteps: this.props.layout.groups.length - 1
    };

    componentWillMount() {
        let { componentFactory } = this.props;

        componentFactory.setCurrentRoot("Wizard");
    }

    componentWillUnmount() {
        let { componentFactory } = this.props;

        componentFactory.setCurrentRoot("default");
    }


    nextStep = () => {
        let { position } = this.state;

        this.setState({position : position + 1})
    };

    backStep = () => {
        let { position } = this.state;

        this.setState({position : position - 1})
    };

    getButtonSection = () => {
        let { position, totalSteps } = this.state;
        let { submitting } = this.props;

        let nextButton = null;
        let backButton = null;
        let submitButton = null;

        if (position != 0) {
            backButton = (
                <Button bsStyle="primary" bsSize="large" onClick={this.backStep}>
                    Back
                </Button>
            );
        }

        if (position != totalSteps) {
            nextButton = (
                <Button bsStyle="primary" bsSize="large" onClick={this.nextStep}>
                    Next
                </Button>
            );
        }

        if (position == totalSteps) {
            submitButton = (
                <Button className="pull-right" bsStyle="success" bsSize="large" type="submit"  disabled={submitting || false}>
                    Submit
                </Button>
            )
        }

        return (
            <Row>
                <Col xs={6} md={4}/>
                <Col xs={6} md={4}/>
                <Col xs={6} md={4}>
                    <ButtonToolbar className="button-toolbar pull-right">
                        {backButton}
                        {nextButton}
                        {submitButton}
                    </ButtonToolbar>
                </Col>
            </Row>
        )
    };

    render() {
        let { position } = this.state;
        let content = this.getContent();

        let buttonSection = this.getButtonSection();

        return (
            <section>
                <div className="row">
                    <div className="metaform-group">
                        {content[position]}
                    </div>
                </div>
                {buttonSection}
            </section>
        );
    }
}

export default WizardGroup;