import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import React, {
	Component,
	Suspense,
	lazy,
} from 'react';
import { TickerTape } from "react-ts-tradingview-widgets";
import "moment/locale/id";
import $ from 'jquery';

const BSmallValbury = lazy(() => import('./small/BSmallValbury'));
const BSmallNews = lazy(() => import('./small/BSmallNews'));
const BMediumOperations = lazy(() => import('./medium/BMediumOperations'));
const BMediumExtras = lazy(() => import('./medium/BMediumExtras'));

export default class BurgeonOperations extends Component {
	jQuery = () => {
		$('#overlay-hide-toggle').on("click", function () {
			$('.operation-container-overlay').toggleClass("width-70");
			$('.overlay-button').toggleClass("rotate-overlay-button");
			$('.overlay-content').toggleClass("hide-section");
			$('.operation-container-overlay-container').toggleClass("pointer-events-none");
			$('.operation-container-overlay').toggleClass("pointer-events-auto");
		});

		$('#overlay-hide-mobile-toggle').on("click", function () {
			$('.overlay-mobile-button').toggleClass("rotate-overlay-mobile-button");
			$('.hide-mobile-overlay-content').toggleClass("hide-section");
			$('.overlay-container-mobile-box').toggleClass("height-70");
			$('.overlay-container-mobile-box').toggleClass("width-70");
			$('.overlay-container-mobile-box').toggleClass("border-radius-conditional-click");
			$('.overlay-container-mobile').toggleClass("padding-left-conditional-click");
			$('.valbury-container-mobile').toggleClass("margin-top-conditional-click");
			$('.outro-container').toggleClass("margin-top-conditional-click");
			$('.overlay-container-mobile').toggleClass('pointer-events-none');
			$('.overlay-container-mobile-box').toggleClass("pointer-events-auto");
		});
	}

	componentDidMount() {
		this.jQuery();
	}

	render() {
		return (
			<div className='container-fluid py-3'>
				<div className='col-md-12 operation-container-overlay-container py-3'>
					<div className='py-3 h-100 me-5'>
						<div className='operation-container-overlay'>
							<div className='d-flex flex-row justify-content-between align-items-center h-100'>
								<div className='overlay-content margin-twentyfour-rl'>
									<h2 className='text-light'>Operations</h2>
									<p className='lead text-light mb-0'>Our work at PT. Burgeon Adaire International touches on a wide range of fields, from trading and investing to web app development, media projects, and eCommerce. We focus on bringing innovation and expertise to everything we do.</p>
									<a href="mailto:geraldzandisko@burgeonadaire.com?subject=Company Profile Request" className='btn btn-dark btn-cp' target="_blank" rel='noopener'>
										<span className='fw-medium'>Get Our Company Profile!</span>
									</a>
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
				<div className='overlay-container-mobile'>
					<div className='overlay-container-mobile-box h-100'>
						<div className='hide-mobile-overlay-content'>
							<h2 className='text-light padding-twentyfour-rl'>Operations</h2>
							<p className='lead text-light mb-0 padding-twentyfour-rl'>Our work at PT. Burgeon Adaire International touches on a wide range of fields, from trading and investing to web app development, media projects, and eCommerce. We focus on bringing innovation and expertise to everything we do.</p>
							<a href="mailto:geraldzandisko@burgeonadaire.com?subject=Company Profile Request" className='btn btn-dark btn-cp-mobile' target="_blank" rel='noopener'>
								<span className='fw-medium'>Get Our Company Profile!</span>
							</a>
						</div>
						<div className='d-flex justify-content-center padding-twentyfour-rl'>
							<a id="overlay-hide-mobile-toggle" role='button'>
								<FontAwesomeIcon icon={faChevronUp} className='overlay-mobile-button link-light' size='lg' />
							</a>
						</div>
					</div>
				</div>
				<div className='row operations-container'>
					<div className='valbury-container-mobile col-xxl-3 py-3 d-flex flex-column'>
						<Suspense fallback={
							<div className='h-50 w-100 rounded bg-secondary'></div>
						}>
							<BSmallValbury />
						</Suspense>
						<Suspense fallback={
							<div className='h-50 w-100 rounded bg-secondary'></div>
						}>
							<BSmallNews />
						</Suspense>
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
								<Suspense fallback={
									<div className='h-100 w-100 rounded bg-secondary'></div>
								}>
									<BMediumOperations />
								</Suspense>
							</div>
						</div>
						<BMediumExtras />
					</div>
				</div>
			</div>
		);
	}
}
