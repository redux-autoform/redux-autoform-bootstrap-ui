import React, {Component, PropTypes} from 'react';
import BaseGroup from './BaseGroup';

class Group extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired
    };

    render() {

        let {layout} = this.props;
        let content = this.getContent();

        // Group header
        let header = layout.title
            ? (
            <header className="metaform-group-header">
                <span className="metaform-group-title">
                    {layout.title}
                </span>
            </header>
        ) : null;

        return (
            <section>
                <div className='row'>
                    <div className="metaform-group">
                        { header }
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