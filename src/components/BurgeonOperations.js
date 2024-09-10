import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
import {
	BurgeonMobileFirstOperations
} from '../components';
import "moment/locale/id";
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
		fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta')
			.then(response => response.json())
			.then((data) => {
				this.setState({
					marketday: data['dateTime'],
					DateLoaded: true,
				});
			})
			.catch(error => {
				console.log('Date: No Data');
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
				console.log('Signal: No Data');
			});
	}

	jQuery = () => {
		var windowWidth = $(window).width();

		$('#overlay-hide-toggle').on("click", function () {
			$('.operation-container-overlay').toggleClass("width-70");
			$('.overlay-button').toggleClass("rotate-overlay-button");
			$('.overlay-content').toggleClass("hide-section");
			$('.operation-container-overlay-container').toggleClass("pointer-events-none");
			$('.operation-container-overlay').toggleClass("pointer-events-auto");
		});

		if (windowWidth <= 768) {
			$('.valbury-box:nth-child(1)').on("click", function () {
				$(this).removeClass('width-20-percent');
				$(this).addClass('width-80-percent');
				$('.valbury-box:nth-child(2)').removeClass('width-80-percent');
				$('.valbury-box:nth-child(2)').addClass('width-20-percent');
				$('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
				$('.valbury-box:nth-child(2) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
			});
			$('.valbury-box:nth-child(2)').on("click", function () {
				$(this).removeClass('width-20-percent');
				$(this).addClass('width-80-percent');
				$('.valbury-box:nth-child(1)').removeClass('width-80-percent');
				$('.valbury-box:nth-child(1)').addClass('width-20-percent');
				$('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
				$('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
			});
		}
	}

	componentDidMount() {
		this.ValburyData();
		this.jQuery();
	}

	render() {
		var valorder = this.state.valburysignal.order;
		var dateraw = new Date(Date(this.state.marketday));
		var dateday = moment(dateraw).locale('id').format('dddd');
		var valorderDate = moment(this.state.valburysignal.date).locale('id').format('ll');
		var datedayDate = moment(dateraw).locale('id').format('ll');

		$(function () {
			if (valorder == undefined) {
				if (dateday === 'Sabtu' || dateday === 'Minggu') {
					$("#status-signal").show();
					$('.valbury-box:first-child').css('background-color', '#272731');
					$("#status-market").removeClass("text-bg-secondary");
					$("#status-market").removeClass("text-bg-dark");
					$("#status-market").removeClass("text-bg-light");
					$("#status-market").removeClass("text-bg-warning");
					$("#status-market").removeClass("text-bg-primary");
					$("#status-market").html("Close");
					$("#status-market").addClass("text-bg-dark");
					$("#status-signal").hide();
				} else {
					$("#status-signal").show();
					$('.valbury-box:first-child').css('background-color', '#272731');
					$("#status-market").removeClass("text-bg-secondary");
					$("#status-market").removeClass("text-bg-dark");
					$("#status-market").removeClass("text-bg-light");
					$("#status-market").removeClass("text-bg-warning");
					$("#status-market").removeClass("text-bg-primary");
					$("#status-market").html("Unavailable");
					$("#status-market").addClass("text-bg-light");
					$("#status-signal").html("Waiting");
				}
			} else {
				if (dateday === 'Senin' || dateday === 'Selasa' || dateday === 'Rabu' || dateday === 'Kamis' || dateday === 'Jumat') {
					$("#status-market").removeClass("text-bg-secondary");
					$("#status-market").removeClass("text-bg-dark");
					$("#status-market").removeClass("text-bg-light");
					$("#status-market").removeClass("text-bg-warning");
					$("#status-market").removeClass("text-bg-primary");
					$("#status-market").html("Open");
					$("#status-market").addClass("text-bg-success");
					if (valorder === 'buy') {
						if (valorderDate != datedayDate) {
							$("#status-signal").show();
							$("#status-signal").removeClass("text-bg-secondary");
							$("#status-signal").html("Expired");
							$("#status-signal").addClass("text-bg-warning");
						} else {
							$("#status-signal").show();
							$("#status-signal").removeClass("text-bg-secondary");
							$("#status-signal").html("Active");
							$("#status-signal").addClass("text-bg-primary");
						}
						$('.valbury-box:first-child').css('background-color', '#1F4B8A');
					} else if (valorder === 'sell') {
						if (valorderDate != datedayDate) {
							$("#status-signal").show();
							$("#status-signal").removeClass("text-bg-secondary");
							$("#status-signal").html("Expired");
							$("#status-signal").addClass("text-bg-warning");
						} else {
							$("#status-signal").show();
							$("#status-signal").removeClass("text-bg-secondary");
							$("#status-signal").html("Active");
							$("#status-signal").addClass("text-bg-primary");
						}
						$('.valbury-box:first-child').css('background-color', '#A32525');
					}
				} else {
					$("#status-signal").show();
					$('.valbury-box:first-child').css('background-color', '#272731');
					$("#status-market").removeClass("text-bg-secondary");
					$("#status-market").removeClass("text-bg-dark");
					$("#status-market").removeClass("text-bg-light");
					$("#status-market").removeClass("text-bg-warning");
					$("#status-market").removeClass("text-bg-primary");
					$("#status-market").html("Close");
					$("#status-market").addClass("text-bg-dark");
				}
			}
		});

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
						<div className='valbury-box h-50 rounded p-4'>
							<div className='valbury-box-container-mobile h-100 d-flex flex-column justify-content-between'>
								<h5 className='text-light'>Valbury Signal</h5>
								<div className='d-flex flex-row justify-content-end'>
									<div className='d-flex flex-column align-items-end'>
										<span id="status-market" className="badge text-bg-secondary badge-fit-content mt-2">Status Market</span>
										<span id="status-signal" className="badge text-bg-secondary badge-fit-content mt-2">Status Signal</span>
										<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
									</div>
								</div>
							</div>
						</div>
						<div className='valbury-box h-50 rounded p-4'>
							<div className='valbury-box-container-mobile d-flex h-100 flex-column justify-content-between'>
								<h5 className='text-light'>Economic News</h5>
								<div className='d-flex flex-column align-items-end'>
									<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
								</div>
							</div>
						</div>
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
									<div className='portfolio-everything-mobile portfolio-box rounded p-4'>
										<div className='d-flex h-100 flex-column justify-content-between'>
											<h5 className='text-light'>Portfolio</h5>
											<div className='d-flex flex-column align-items-end'>
												<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
											</div>
										</div>
									</div>
								</div>
								<div className='mobile-child-operations col-md-4'>
									<div className='portfolio-box rounded p-4'>
										<div className='d-flex h-100 flex-column justify-content-between'>
											<h5 className='text-light'>Blog</h5>
											<div className='d-flex flex-column align-items-end'>
												<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
											</div>
										</div>
									</div>
								</div>
								<div className='mobile-child-operations col-md-4'>
									<div className='portfolio-box rounded p-4'>
										<div className='d-flex h-100 flex-column justify-content-between'>
											<h5 className='text-light'>The Adaire Solutions</h5>
											<div className='d-flex flex-column align-items-end'>
												<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
											</div>
										</div>
									</div>
								</div>
								<BurgeonMobileFirstOperations />
							</div>
						</div>
						<div className='flex-grow-1 operation-child-container'>
							<div className='ecommerce-box rounded p-4'>
								<div className='d-flex h-100 flex-column justify-content-between'>
									<h5 className='text-light'>eCommerce</h5>
									<div className='d-flex flex-column align-items-end'>
										<span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
