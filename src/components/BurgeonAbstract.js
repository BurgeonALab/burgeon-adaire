import React, { Component } from 'react';

export default class BurgeonAbstract extends Component {
	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='row'>
					<div className='col-xxl-8 c-abstract-box'>
						<h1 className='text-white'>
						<span>Identity:</span>
						<span className='fw-light'> Driving the Future</span>
						</h1>
						<p className='lead text-white'><strong>PT. Burgeon Adaire International</strong> thrives at the intersection of innovation and opportunity, where we weave knowledge and growth into the fabric of an ever-changing landscape. We build connections that matter, creating spaces for exploration and collaboration. Beyond our primary pursuits, we extend our reach into new avenues, offering value and excellence in unexpected places.</p>
					</div>
					<div className='offset-xxl-1 col-xxl-3'>
						<div className='sky-video-box py-3'>
							<div className='sky-video-content rounded'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
