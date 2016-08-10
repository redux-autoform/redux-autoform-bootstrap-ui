import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

export default class FileUpload extends Component {
	static propTypes = {
		url: PropTypes.string.isRequired
	};

	onDrop = (files) => {
		const { url } = this.props;

		fetch()
			.then(response => response.json())
			.then()
			.catch()
	};

	render() {
		return false;
	}

}