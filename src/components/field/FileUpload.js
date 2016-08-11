import React, { Component, PropTypes } from 'react';
import DropZone from '../common/DropZone';
import GlyphButton from '../common/GlyphButton';
import FileInfo from '../common/FileInfo';
import { Col, Row, Glyphicon } from 'react-bootstrap';

import fetch from 'isomorphic-fetch';

export default class FileUpload extends Component {
	static propTypes = {
		url: PropTypes.string.isRequired
	};

	state = {
		files: []
	};

	onDrop = (files) => {
		let fileArray = [...files, ...this.state.files];

		this.setState({ files: fileArray });
	};

	onClick = () => {
		// TODO Handle response status for upload service
		const { files } = this.state;
		const { url } = this.props;

		let fileData = new FormData();

		files.forEach((file) => {
			fileData.append("fileData", file);
		});

		fetch(url, {
			method: "POST",
			body: fileData
		});
	};

	render() {
		let { files } = this.state;

		const attachmentStyle = {
			marginTop: "6px",
			color: "#616161"
		};

		const messageContainerStyle = {
			marginTop: "6px"
		};

		const messageStyle = {
			textAlign: "center",
			color: "#616161"
		};

		let rowStyle = {};

		if (files) {
			rowStyle = {
				padding: "5px"
			}
		}

		return (
			<div>
				<Row>
					<Col xs={2} md={2}>
						<div style={attachmentStyle}>
							<b>Attachment</b>
						</div>
					</Col>
					<Col xs={10} md={10}>
						<DropZone onDrop={this.onDrop}>
							<div style={messageContainerStyle}>
								<p style={messageStyle}>
									<Glyphicon glyph="cloud-upload"/> Drop files to attach, or <a>browse</a>
								</p>
							</div>
							<div style={rowStyle}>
								<Row>{
									files.map((file, index) => (
										<FileInfo key={index} file={file}/>
									))
								}
								</Row>
							</div>
						</DropZone>
					</Col>
				</Row>
				<Col>
					<GlyphButton type="submit" glyph="cloud-upload" text="Upload" bsSize="sm" bsStyle="primary" onClick={this.onClick}/>
				</Col>
			</div>
		);
	}

}