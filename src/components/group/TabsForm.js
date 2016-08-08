import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class TabsForm extends Component {
	static propTypes = {
		content: PropTypes.array.isRequired,
		layout: PropTypes.object.isRequired
	};

	state = {
		position: 0
	};

	handleSelect = (eventKey) => {
		event.preventDefault();
		this.setState({ position: eventKey });
	};
	
	render() {
		let { layout, content } = this.props;
		let { position } = this.state;

		return (
			<section>
				<div className='row'>
					<div className="metaform-group">
						<Nav bsStyle="tabs" onSelect={this.handleSelect}>
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
