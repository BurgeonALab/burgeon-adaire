import React, { Component } from 'react';

export default class BurgeonAbstract extends Component {
	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='row'>
					<div className='col-xxl-8 c-abstract-box'>
						<h1 className='text-light'>
							<span>Identity:</span>
							<span className='fw-light'> Driving the Future</span>
						</h1>
						<p className='lead text-light'><strong>PT. Burgeon Adaire International</strong> thrives at the intersection of innovation and opportunity, where we weave knowledge and growth into the fabric of an ever-changing landscape. We build connections that matter, creating spaces for exploration and collaboration. Beyond our primary pursuits, we extend our reach into new avenues, offering value and excellence in unexpected places.</p>
					</div>
					<div className='sky-video-box-mobile offset-xxl-1 col-xxl-3'>
						<div className='sky-video-content position-relative rounded'>
							<video id="abstract-player" className='w-100 h-100 object-fit-cover rounded' poster="https://images.burgeonadaire.com/sky_thumbnail.webp" autoPlay loop muted>
								<source src="https://resources.burgeonadaire.com/videos/sky.mp4" type='video/mp4'></source>
							</video>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
