import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

import { Button } from 'react-bootstrap';

class WizardGroup extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired
    };

    state = {
        position: 0,
        totalSteps: this.props.layout.groups.length - 1
    };


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

        return (
            <div className="button-toolbar btn-toolbar pull-right">
                <Button bsStyle="primary" disabled={position == 0} onClick={this.backStep}>Back</Button>
                <Button bsStyle="primary" disabled={position == totalSteps} onClick={this.nextStep}>Next</Button>
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