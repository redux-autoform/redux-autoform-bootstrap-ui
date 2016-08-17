import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

import { Button, ButtonGroup } from 'react-bootstrap';

class WizardGroup extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired,
        buttonBar: PropTypes.func.isRequired
    };

    state = {
        position: 0,
        totalSteps: this.props.layout.groups.length - 1
    };

    constructor(props) {
        super(props);
        let { componentFactory } = props;

        componentFactory.setCurrentRoot("Wizard");
    }

    componentWillUnmount() {
        let { componentFactory } = this.props;

        componentFactory.setCurrentRoot("default");
    }


    nextStep = () => {
        let { position } = this.state;

        this.setState({position : position + 1})
    }

    backStep = () => {
        let { position } = this.state;

        this.setState({position : position - 1})
    }

    getButtonSection = () => {
        let { position, totalSteps } = this.state;
        let { buttonBar } = this.props;

        return (
            <div>
                <div className="button-toolbar btn-toolbar pull-right">
                    <ButtonGroup>
                        <Button bsStyle="primary" disabled={position == 0} onClick={this.backStep}>Back</Button>
                        <Button bsStyle="primary" disabled={position == totalSteps} onClick={this.nextStep}>Next</Button>
                    </ButtonGroup>
                    { position == totalSteps? React.createElement(buttonBar, { submitting: false }) : null }
                </div>
            </div>
        )

    }

    render() {
        let { position } = this.state;
        let content = this.getContent();

        let buttonSection = this.getButtonSection();

        return (
            <section>
                <div className="row">
                    <div className="metaform-group">
                        { content[position] }
                        { buttonSection }
                    </div>
                </div>
            </section>
        );
    }
}

export default WizardGroup;