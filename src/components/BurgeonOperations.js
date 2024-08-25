import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";

export default class BurgeonOperations extends Component {
	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='row'>
					<div className='col-md-12'>
						<TickerTape colorTheme="dark"></TickerTape>
					</div>
				</div>
			</div>
		);
	}
}
