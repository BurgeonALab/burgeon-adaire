import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";

export default class BurgeonOperations extends Component {
	render() {
		return (
			<div>
				<TickerTape colorTheme="dark"></TickerTape>
			</div>
		);
	}
}
