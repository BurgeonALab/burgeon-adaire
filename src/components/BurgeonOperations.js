import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";

export default class BurgeonOperations extends Component {
	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='operation-text-center'>
							<h2 className='text-white'>Operation</h2>
							<p className='lead text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
						<TickerTape colorTheme="dark"></TickerTape>
					</div>
				</div>
			</div>
		);
	}
}
