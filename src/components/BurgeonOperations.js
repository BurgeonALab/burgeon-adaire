import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
import {
	BurgeonMobileFirstOperations
} from '../components';
import moment from 'moment';
import $ from 'jquery';

export default class BurgeonOperations extends Component {
	constructor(props) {
		super(props);

		this.state = {
			valburysignal: {},
			marketday: "",
			VSLoaded: false,
			DateLoaded: false,
		};
	}

	ValburyData = () => {
		fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
			.then(response => response.json())
			.then((data) => {
				this.setState({
					marketday: data['datetime'],
					DateLoaded: true,
				});
			})
			.catch(error => {
				console.log(error);
			});

		fetch('https://86c7czpmn0.execute-api.us-east-1.amazonaws.com/valbury-bulletin')
			.then(response => response.json())
			.then((data) => {
				this.setState({
					valburysignal: data['document']['xauusd_signals'].pop(),
					VSLoaded: true,
				});
			})
			.catch(error => {
				console.log(error);
			});

		var valorder = this.state.valburysignal.order;
		var windowWidth = $(window).width();
		var dateraw = new Date(Date(this.state.marketday));
		var dateday = moment(dateraw).format('dddd');

		$(function () {
			if (dateday === 'Monday' || dateday === 'Monday' || dateday === 'Tuesday' || dateday === 'Wednesday' || dateday === 'Thrusday' || dateday === 'Friday') {
				if (valorder === 'buy') {
					$('.valbury-box:first-child').css('background-color', '#1F4B8A');
				} else if (valorder === 'sell') {
					$('.valbury-box:first-child').css('background-color', '#A32525');
				}
			} else {
				$('.valbury-box:first-child').css('background-color', '#272731');
			}

			$('#overlay-hide-toggle').on("click", function () {
				$('.operation-container-overlay').toggleClass("width-70");
				$('.overlay-button').toggleClass("rotate-overlay-button");
				$('.overlay-content').toggleClass("hide-section");
				$('.operation-container-overlay-container').toggleClass("pointer-events-none");
				$('.operation-container-overlay').toggleClass("pointer-events-auto");
			});

			if (windowWidth <= 768) {
				$('.valbury-box:nth-child(1)').on("click", function () {
					$('.valbury-box:nth-child(2)').removeClass('width-60-percent');
					$(this).addClass('width-60-percent');
				});

				$('.valbury-box:nth-child(2)').on("click", function () {
					$('.valbury-box:nth-child(1)').removeClass('width-60-percent');
					$(this).addClass('width-60-percent');
				});
			}
		});
	}

	componentDidMount() {
		this.ValburyData();
	}

	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='col-md-12 operation-container-overlay-container py-3'>
					<div className='py-3 h-100 me-5'>
						<div className='operation-container-overlay'>
							<div className='d-flex flex-row justify-content-center align-items-center h-100'>
								<div className='overlay-content margin-twentyfour-rl'>
									<h2 className='text-light'>Operations</h2>
									<p className='lead text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
								<div className='margin-twentyfour-rl'>
									<a id="overlay-hide-toggle" role='button'>
										<FontAwesomeIcon icon={faChevronLeft} className='overlay-button link-light' size='lg' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row operations-container'>
					<div className='valbury-container-mobile col-xxl-3 py-3 d-flex flex-column'>
						<div className='valbury-box flex-grow-1 rounded'></div>
						<div className='valbury-box flex-grow-1 rounded'></div>
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
								<div className='mobile-child-operations col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
								<div className='mobile-child-operations col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
								<div className='mobile-child-operations col-md-4'>
									<div className='portfolio-box rounded'></div>
								</div>
								<BurgeonMobileFirstOperations />
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
