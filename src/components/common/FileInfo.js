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

		const imgStyle = {
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto'
		};

		let image = null;

		if (file.type.match(/image/)) {
			image = <img height={height} width={width} src={file.preview} style={imgStyle}/>;
		}

		//TODO truncate fileName to keep the Col in the same height
		const containerStyle = {
			backgroundColor: "#e0e0e0",
			paddingTop: "10px",
			paddingBottom: "10px"
		};

		const fileNameStyle = {
			textAlign: 'center'
		};

		const fileSizeStyle = {
			textAlign: 'right',
			paddingRight: "10px"
		};

		return (
			<Col xs={4} md={4}>
				<div style={containerStyle}>
					<div>
						{image}
					</div>
					<div>
						<p style={fileNameStyle}>
							<a>{file.name}</a>
						</p>
						<p style={fileSizeStyle}>
							{filesize(file.size)}
						</p>
					</div>
				</div>
			</Col>
		);
	}
};