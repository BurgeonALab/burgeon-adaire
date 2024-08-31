import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
import $ from 'jquery';

export default class BurgeonOperations extends Component {
	jQuery = () => {
		$(function () {
			$("#operation-button").on("click", function () {
				$(".operation-hide-overlay").css('justify-content', 'center');
				$(".operation-hide-box").css('pointer-events', 'none');
				$(".operation-hide-box").css('width', 'auto');
				$(".button-operation-left").css('display', 'none');
				$(".button-operation-right").css('display', 'block');
				$(".operation-description-minimize").css('display', 'none');
			});
			$("#operation-button-expand").on("click", function () {
				$(".operation-hide-box").css('width', 'revert');
				$(".operation-description-minimize").css('display', 'block');
				$(".button-operation-right").css('display', 'none');
				$(".button-operation-left").css('display', 'block');
				$(".operation-hide-box").css('pointer-events', 'auto');
			});
		});
	}

	componentDidMount() {
		this.jQuery()
	}
	render() {
		return (
			<div className='container-fluid py-3' >
				<div className='col-md-12 operation-hide-box py-3'>
					<div className='operation-hide-overlay operation-text-center me-5'>
						<div className='d-flex flex-row overlay-content-mobile'>
							<div className='operation-description-minimize padding-24'>
								<h2 className='text-white'>Operation</h2>
								<p className='lead text-white mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div className='flex-shrink-1 align-self-center padding-24'>
								<a id="operation-button" className='button-operation-left' role='button'>
									<FontAwesomeIcon id="chevron-overlay" icon={faChevronLeft} className='link-light' size='lg' />
								</a>
								<a id="operation-button-expand" className='button-operation-right' role='button'>
									<FontAwesomeIcon id="chevron-overlay" icon={faChevronRight} className='link-light' size='lg' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='row operations-container'>
					<div className='col-md-4 py-3'>
					</div>
					<div className='col-md-8 d-flex flex-column py-3'>
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
						<div className='flex-grow-1'></div>
						<div className='flex-grow-1'></div>
					</div>
				</div>
			</div>
		);
	}
}
