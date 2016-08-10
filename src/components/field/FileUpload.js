import React, { Component, PropTypes } from 'react';
import DropZone from 'react-dropzone';

export default class FileUpload extends Component {
	static propTypes = {
		url: PropTypes.string.isRequired
	};

	state = {
		files: []
	};

	onDrop = (files) => {
		let fileArray = [...this.state.files, ...files];
		this.setState({ files: fileArray });
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