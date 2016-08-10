import React, { Component, PropTypes } from 'react';
import filesize from 'filesize';

const FileUploadItem = ({ file, height, width }) => {
	let image = null;

	if (file.type.match(/image/)) {
		image = <img height={height} width={width} src={file.preview}/>;
	}

	return (
		<div>
			{image}
			<p>{file.name}</p>
			<p>{filesize(file.size)}</p>
		</div>
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