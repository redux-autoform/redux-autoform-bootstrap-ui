import React, { Component, PropTypes } from 'react';

const Header = ({ title }) => {
	if (title) {
		return (
			<header className="metaform-group-header">
				<span className="metaform-group-title">
					{title}
				</span>
			</header>
		)
	} 
	
	return null;
};

export default Header;