import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { Nav, NavItem, Row } from 'react-bootstrap';

class TabGroup extends BaseGroup {
	static propTypes = {
		component: PropTypes.string,
		fields: PropTypes.array.isRequired,
		layout: PropTypes.object.isRequired,
		componentFactory: PropTypes.object.isRequired
	};

	state = {
		position: 0
	};

    getComponents = () => {
        let {layout, componentFactory, fields} = this.props;
        let components;

        if (layout.fields) {
            components = layout.fields.map(field => ({
                data: this.getFieldMetadata(field),
                length: layout.fields.length,
                component: componentFactory.buildFieldComponent(this.getFieldMetadata(field))
            }));

        } else if (layout.groups) {

            components = layout.groups.map(group => ({
                data: {...group, headLess: true},
                length: layout.groups.length,
                component: componentFactory.buildGroupComponent({
                    component: group.component,
                    layout: {...group, headLess: true},
                    fields: fields,
                    componentFactory: componentFactory
                })
            }));
        }

        return components;
    };

	onNavItemSelected = (key) => this.setState({position: key});

	render() {
		let {layout} = this.props;
		let {position} = this.state;
		let content = this.getContent();

		return (
			<section>
				<Row>
					<div className="metaform-group">
						<Nav bsStyle="tabs" activeKey={position} onSelect={this.onNavItemSelected}>
							{
								layout.groups.map(({ title }, index) => (
									<NavItem key={index} eventKey={index}>
										{title}
									</NavItem>
								))
							}
						</Nav>
						<div className="metaform-group-content">
							{content[position]}
						</div>
					</div>
				</Row>
			</section>
		);
	}
}

export default TabGroup;