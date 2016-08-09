import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
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
        let content = this.getContent();

        return (
            <section>
                <div className='row'>
                    <div className="metaform-group">
                        <Header title={layout.title}/>
                        <div className="metaform-group-content">
                            { content }
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default Group;