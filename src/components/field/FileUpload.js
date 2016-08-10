import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import DropZone from 'react-dropzone';

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
		return (
			<div>
				<label>Files</label>
				<div>
					<DropZone onDrop={this.onDrop}>
						<div>
							Try dropping some files here, or click to select files to upload.
						</div>
					</DropZone>
				</div>
			</div>
		);
	}

}