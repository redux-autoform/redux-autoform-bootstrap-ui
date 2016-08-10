import React, { Component, PropTypes } from 'react';
import DropZone from '../common/DropZone';
import GlyphButton from '../common/GlyphButton';
import FileInfo from '../common/FileInfo';

import fetch from 'isomorphic-fetch';

export default class FileUpload extends Component {
	static propTypes = {
		url: PropTypes.string.isRequired
	};

	state = {
		files: []
	};

	onDrop = (files) => {
		//TODO Check file and size. Avoid duplicated files
		let fileArray = [...files, ...this.state.files];

		this.setState({ files: fileArray });
	};

	onClick = (event) => {
		// TODO Handle response status for upload service
		event.preventDefault();

		const { files } = this.state;
		const { url } = this.props;

		let fileData = new FormData();

		files.forEach((file) => {
			fileData.append(file.name, file);
		});

		fetch(url, {
			method: "POST",
			body: fileData
		});
	};

	render() {
		let { files } = this.state;

		return (
			<div>
				<label>Files</label>
				<div>
					<DropZone onDrop={this.onDrop}>
						<div>
							Try dropping some files here, or click to select files to upload.
						</div>
						<div>{
							files.map((file, index) => (
								<FileInfo key={index} file={file}/>
							))
						}
						</div>
					</DropZone>
					<div>
						<GlyphButton text="Upload" onClick={this.onClick}/>
					</div>
				</div>
			</div>
		);
	}

}