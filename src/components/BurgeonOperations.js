import React, { Component } from 'react';
import { Ticker } from "react-ts-tradingview-widgets";

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
						<Ticker symbols={[
							{
								"proName": "PEPPERSTONE:XAUUSD",
								"title": "GOLD"
							},
							{
								"proName": "PEPPERSTONE:USDJPY",
								"title": "USD/JPY"
							},
							{
								"proName": "PEPPERSTONE:GBPUSD",
								"title": "GBP/USD"
							},
							{
								"proName": "PEPPERSTONE:EURUSD",
								"title": "EUR/USD"
							},
							{
								"proName": "PEPPERSTONE:NAS100",
								"title": "NASDAQ-100"
							},
							{
								"proName": "PEPPERSTONE:US500",
								"title": "S&P 500"
							},
							{
								"proName": "PEPPERSTONE:SPOTCRUDE",
								"title": "CRUDE OIL"
							},
							{
								"proName": "PEPPERSTONE:BTCUSD",
								"title": "BITCOIN"
							},
							{
								"proName": "PEPPERSTONE:SOLUSD",
								"title": "SOLANA"
							},
						]} colorTheme="dark"></Ticker>
					</div>
				</div>
			</div>
		);
	}
}
