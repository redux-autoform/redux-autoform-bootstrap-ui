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

		return (
			<Col xs={4} md={4}>
				<div style={{backgroundColor: "#e0e0e0"}}>
					<div>
						{image}
					</div>
					<div>
						<p style={{textAlign: 'center'}}>
							<a>{file.name}</a>
						</p>
						<p style={{textAlign: 'right'}}>{filesize(file.size)}</p>
					</div>
				</div>
			</Col>
		);
	}
};