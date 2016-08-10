import React, { Component, PropTypes } from 'react';
import filesize from 'filesize';

const FileUploadItem = ({ file, height, width }) => {
	let image = null;

	if (file.type.match(/image/)) {
		image = <img height={height} width={width} src={file.preview}/>;
	}

	return (
		<li>
			{image}
			<p>{file.name}</p>
			<p>{filesize(file.size)}</p>
		</li>
	);
};

FileUploadItem.propTypes = {
	file: PropTypes.object.isRequired,
	height: PropTypes.string,
	width: PropTypes.string
};

FileUploadItem.defaultProps = {
	height: "50px",
	width: "50px"
};

export default FileUploadItem;