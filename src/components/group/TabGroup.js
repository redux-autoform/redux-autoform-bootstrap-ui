import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { Nav, NavItem } from 'react-bootstrap';

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

	handleSelect = (eventKey) => {
		this.setState({ position: eventKey });
	};

	render() {
		let { layout } = this.props;
		let { position } = this.state;
		let content = this.getContent();

		return (
			<section>
				<div className="row">
					<div className="metaform-group">
						<Nav bsStyle="tabs" activeKey={position} onSelect={this.handleSelect} navbar justified>
							{
								layout.groups.map(({ title }, index) => (
									<NavItem key={index} eventKey={index}>
										{title}
									</NavItem>
								))
							}
						</Nav>
						<div className="metaform-group-content">
							{ content[position] }
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default TabGroup;