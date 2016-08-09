import React, { Component, PropTypes } from 'react';
import AlertMessage from '../common/AlertMessage';
import NormalForm from './../form/NormalForm';
import BaseGroup from './BaseGroup';

class Group extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired
    };

    render() {
        let { layout } = this.props;

        // the passed in layout can contain either fields or groups.
        // in case it contains 'fields', we're gonna render each of the fields.
        // in case it contains 'groups', we're gonna render each group, passing the fields as a parameter
        try {
            return <NormalForm title={layout.title} content={this.getContent()}/>
        } catch (ex) {
            return <AlertMessage error={ex}/>
        }
    }
}

export default Group;