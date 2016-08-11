import React, { Component, PropTypes } from 'react';
import { Col, Glyphicon } from 'react-bootstrap';
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
		let { file, height, width, onClick } = this.props;

		const containerStyle = {
			margin: "auto",
			padding: "0px",
			backgroundColor: "#eeeeee",
			borderColor: '#757575',
			borderStyle: 'solid',
			borderWidth: 2,
			borderRadius: 6,
			marginBottom: "10px"
		};

		const fileNameStyle = {
			textAlign: 'center'
		};

		const fileSizeStyle = {
			textAlign: 'right',
			paddingRight: "10px"
		};

		const glyphSizeStyle = {
			textAlign: 'left',
			paddingLeft: "10px",
			paddingBottom: "10px"
		};

		const imgStyle = {
			marginTop: "10px",
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto'
		};

		const textContainerStyle = {
			marginTop: "10px",
			color: "#212121"
		};

		let image = (file.type.match(/image/))? file.preview : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/file-text-icon.png";
		let filename = (file.name.length <= 21)? file.name : file.name.substring(0, 20);

		return (
			<Col xs={4} md={4}>
				<div style={containerStyle}>
					<img height={height} width={width} src={image} style={imgStyle}/>
					<div style={textContainerStyle} onClick={onClick}>
						<p style={fileNameStyle}>{filename}</p>
						<p style={fileSizeStyle}>
							<Glyphicon glyph="trash"/>
							{" " + filesize(file.size)}
						</p>
					</div>
				</div>
			</Col>
		);
	}
};