import React, { Component, PropTypes } from 'react';
import { Alert, Nav, NavItem } from 'react-bootstrap';

export default class Tabs extends Component {
	static propTypes = {
		header: PropTypes.object,
		content: PropTypes.object,
		layout: PropTypes.object
	};
	
	render() {
		let { header, content, layout } = this.props;

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
