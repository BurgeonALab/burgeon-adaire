import React, { Component } from 'react';

export default class CompanyAbstract extends Component {
	render() {
		return (
			<div className='container-fluid py-5'>
				<div className='row'>
					<div className='col-md-8 c-abstract-box'>
						<h1 className='text-white'>
						<span>Identity:</span>
						<span className='fw-light'> Driving the Future</span>
						</h1>
						<p className='display-6 text-white'><strong>PT. Burgeon Adaire International</strong> thrives at the intersection of innovation and opportunity, where we weave knowledge and growth into the fabric of an ever-changing landscape. We build connections that matter, creating spaces for exploration and collaboration. Beyond our primary pursuits, we extend our reach into new avenues, offering value and excellence in unexpected places.</p>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		);
	}
}