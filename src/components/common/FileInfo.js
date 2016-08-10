import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import filesize from 'filesize';

export default class FileUploadItem extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		file: PropTypes.object.isRequired,
		height: PropTypes.string,
		width: PropTypes.string
	};

	static defaultProps = {
		height: "150px",
		width: "150px"
	};

	render() {
		let { file, height, width } = this.props;

		let image = null;

		if (file.type.match(/image/)) {
			image = <img height={height} width={width} src={file.preview}/>;
		}

		return (
			<Col xs={4} md={4}>
				{image}
				<p>{file.name}</p>
				<p>{filesize(file.size)}</p>
			</Col>
		);
	}
};