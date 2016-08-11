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
		files: [],
        disableUpload: true
	};

	onDrop = (files) => {
		//TODO filter to avoid duplicates
		let fileArray = [...files, ...this.state.files];

		this.setState({files: fileArray});
        this.setState({disableUpload: false});

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
		})
		.then(response => response.json())
        .then(({message}) => alert(message));
	};

	deleteItem = (position) => {
		let { files } = this.state;
		files.splice(position, 1);

		this.setState({files: files});
        this.setState({disableUpload: files.length == 0});

	};

	openDropZone = () => {
		this.refs.dropzone.open();
	};

	render() {
		let { files, disableUpload } = this.state;

		const attachmentStyle = {
			marginTop: "6px",
			color: "#616161"
		};

		const messageContainerStyle = {
			marginTop: "10px"
		};

		const messageStyle = {
			textAlign: "center",
			color: "#616161"
		};

		let rowStyle = {
			padding: "0px"
		};

		if (files) {
			rowStyle = {
				padding: "15px"
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
						<DropZone ref="dropzone" onDrop={this.onDrop} disableClick>
							<div style={messageContainerStyle}>
								<p style={messageStyle}>
									<Glyphicon glyph="cloud-upload"/> Drop files to attach, or <a onClick={this.openDropZone}>browse</a>
								</p>
							</div>
							<div style={rowStyle}>
								<Row>{
									files.map((file, index) => (
										<FileInfo key={index} file={file} onClick={() => this.deleteItem(index)}/>
									))
								}
								</Row>
							</div>
						</DropZone>
					</Col>
				</Row>
				<Col>
					<GlyphButton disabled={disableUpload} type="submit" glyph="cloud-upload" text="Upload" bsSize="sm" bsStyle="primary" onClick={this.onClick}/>
				</Col>
			</div>
		);
	}

}