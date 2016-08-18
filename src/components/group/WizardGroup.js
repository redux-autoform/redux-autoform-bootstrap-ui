import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

import { Button, Row, Col, ButtonToolbar } from 'react-bootstrap';

const mergeJson = (arr) => arr.reduce((prev, actual) => ({...prev, ...actual}));


class WizardGroup extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired
    };

    wizardContext = {
        fields: {},
        goToStep: (stepName) => {
            let steps = this.getSteps();
            let foundStep = steps.find((step) => step.name === stepName);

            if(foundStep)
                this.setState({position: foundStep.position})
            else
                console.error(`Step ${stepName} does not exists`);

        },
        goToPosition: (position) => {
            let { totalSteps } = this.state;

            if(position >= 0 && position <= totalSteps)
                this.setState({position})
            else
                console.error(`Position ${position} does not exists`);
        },
        next: () => {
            this.nextStep();
        }
    }

    state = {
        position: 0,
        totalSteps: this.props.layout.groups.length - 1
    };



    nextStep = () => {
        let { position } = this.state;

        this.setState({position : position + 1})
    };

    backStep = () => {
        let { position } = this.state;

        this.setState({position : position - 1})
    };

    updateWizardContext = () => {
        let { fields } = this.props;

        this.wizardContext.fields = mergeJson(fields.map(field => ({[field.name]: field.reduxFormProps.value})));

    }

    getButtonSection = (steps) => {
        let { position, totalSteps } = this.state;
        let { submitting } = this.props;

        let currentStep = steps[position];

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
                <Button bsStyle="primary" bsSize="large" onClick={currentStep.transition? () => currentStep.transition(this.wizardContext) : this.nextStep}>
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

    getSteps = () => {
        let { layout } = this.props;
        let content = this.getContent();

        // Maps each content to his transition function
        let steps = layout.groups.map((group, index) => ({content: content[index], transition: group.transition, name: group.name, position: index}));

        return steps;
    };

    render() {
        let { position } = this.state;

        let steps = this.getSteps();

        let buttonSection = this.getButtonSection(steps);

        this.updateWizardContext();

        return (
            <section>
                <div className="row">
                    <div className="metaform-group">
                        {steps[position].content}
                    </div>
                </div>
                {buttonSection}
            </section>
        );
    }
}


export default WizardGroup;