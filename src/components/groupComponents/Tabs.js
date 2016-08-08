import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Header from '../Header';

export default class Tabs extends Component {
	static propTypes = {
		content: PropTypes.array,
		layout: PropTypes.object
	};

	state = {
		position: 0
	};

	handleSelect = (eventKey) => {
		event.preventDefault();
		this.setState({ position: eventKey });
	};
	
	render() {
		let { layout } = this.props;
		let { position } = this.state;

		return (
			<section>
				<div className='row'>
					<div className="metaform-group">
						<Header title={layout.title}/>
						<Nav bsStyle="tabs" onSelect={this.handleSelect}>
							{
								layout.groups.map((item, index) => (
									<NavItem eventKey={index}>
										{item.title}
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
