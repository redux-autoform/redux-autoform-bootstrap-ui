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
		files.forEach(file => {
			console.info("This is the name: " + file.name);
			console.info("This is the preview: " + file.preview);
		});

		console.info("This are the files: " + JSON.stringify(files));
		this.setState({ files: files });
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