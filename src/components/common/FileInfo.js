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

		const imgStyle = {
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto'
		};

		//TODO check this
		let image = (file.type.match(/image/))? file.preview : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEW9w8f///+Vpaa8wsbCx8uvubyerK2ksLKqtLeYp6jV2dyQoaKsuLmPoKG4v8Ocqqze4uP2+PjQ19e8xsfEzM34+fni5ObM0dTn6urX2t3u7/Czu7+daS8oAAAD0ElEQVR4nO3dbXOiMBiFYUCB0PBibW139f//z0Wdju5umzyE8HDCnPtrpzXXhLcGRrJ862VrD2DxKEw/CtOPwvSj8Lnzx+H3y5IdVxV+7Pu+3y2baVcTnl5GXbZ4ZbcAUST80OBdhYWNT5QIP3sV31W4AFEg3OtM4F0Yn+gX6gFvwuhEr/BTD3gXxib6hAetffAhjEz0CE+awC9hXKJHqLmNPoRRiW7hq+oUPoQxiW7hi+oUPgkjEt1C3Sl8FsYjOoXnFYXRiE7hQXcj/VsYi+gUKu+G/wgjEZ1C3XPFf8I4RKdQ8ZL0W2EUIrYwBhFcGIGILpxPhBfOJuIL5xITEM4kpiCcR0xCOIuYhnAOMRHhDGIqwnBiMsJgYjrCUGJCwkBiSsIwYlLCIGJawhBiYsIAYmrC6cTkhJOJUMKLRDiVCCXs7QJEKGEmAk4kYgmHBYhYQiMUTiFiCXeyHXESEUuYVVKhnAgmvIgnUUwEE+7lkyglggmznVwoJKIJp2ynMiKcMDORiXjCrI1LBBTK/sUQExGFWT9EPGlACsdpbKJd3YAKx2NqXQiRnsffYYVjfWlqSdVbqkJx+60LdxRSCB+FFOJHYaBQurQZq0FdOGFBJUoVhRRSSCGFKQonrPlFyOoLL6VuF3UhUBRSiB+FFOJHIYX4UUghfhRSiB+FFP5Q1eimv07DOzOx43ophRRSSGGKwtLoVqoLgaKQQvwopBA/CinEj0IK8aOQQvwopPCH6qHSbKjVhbxvETuuJlJIIYVbFG7/bCH7Qod4GXUhUBRSiB+FFOJHIYX4UUghfhRSiB+FFP7Q9lcxtr8Stf3VRAoppJDC5YXbP1ts/0kFoCikED8KKcSPQgrxo5BC/CikED8KKcSPQgrxo5BC/CikED8KXT9MpWBhv/bIhfXBQsd3pEFVBgsdzyFBZYKFjnvnUFXBwiGNzbQcwufQ8XgAUEP4HFbW8R4pmC52hrBo9muP39t+KMKFdVHgH05NUdTBwtYWBfpZvy8K2wYL36/vx8O+Nt2NI7TvwcJDN/5+g0zcNeMIu0Ow8NTdHinDPaBebuPrTsHCvL39BYt6uDH3t0w6d0OP8HCfxKJBvLgpm/vg3BupR5g3Xw8/NgbroNqbx9DcBI/waxKv22pTGaP8as7vM6ZqHm9B9UyhT5jXui9UnZ51nu4FwhO80HkgFQjzX53/U1as++UDeIXPuyJevp1QJESeRf8MioT5a41p7OpXweglwjw/WjxjZ4+iscuEo7HqLM5h1dqukvnkwjw/H9/aqvF/+uI1Vft2PIvH/Qe0D6lLW0grSAAAAABJRU5ErkJggg==";

		return (
			<Col xs={4} md={4}>
				<div style={containerStyle}>
					<div>
						<img height={height} width={width} src={image} style={imgStyle}/>
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