// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faChevronLeft,
// 	faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
// import $ from 'jquery';

export default class BurgeonOperations extends Component {
	// jQuery = () => {
	// }

	componentDidMount() {
		// this.jQuery()
	}
	render() {
		return (
			<div className='container-fluid py-3'>
				{/* <div className='col-md-12 operation-container py-3'>
				</div> */}
				<div className='row operations-container'>
					<div className='adaire-solutions-container-mobile col-xxl-3 py-3'>
						<div className='adairesolutions-box rounded'></div>
					</div>
					<div className='other-operations-container-mobile col-xxl-9 d-flex flex-column py-3'>
						<div>
							<TickerTape
								symbols={[
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
								]}
								colorTheme="dark"
							>
							</TickerTape>
						</div>
						<div className='flex-grow-1 operation-child-container'>
							<div className='row h-100 portfolio-box-mobile'>
								<div className='col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
								<div className='col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
								<div className='col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
							</div>
						</div>
						<div className='flex-grow-1 operation-child-container'>
							<div className='ecommerce-box rounded'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
