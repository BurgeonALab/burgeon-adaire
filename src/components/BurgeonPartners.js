import React, { Component } from 'react';
import Marquee from "react-fast-marquee";

export default class BurgeonOutro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      associates: [
        {
          id: 0,
          name: "Valbury Asia Group",
          desc: "Valbury Asia Group Wealth Management",
          logo: "https://images.burgeonadaire.com/valbury.webp",
          link: "https://valbury.co.id/sales/trading-valbury?fc=VMD1059F",
        },
        {
          id: 1,
          name: "Gerald Zandisko",
          desc: "Gerald Zandisko's Homepage",
          logo: "https://images.burgeonadaire.com/gerald-zandisko.webp",
          link: "https://geraldzandisko.burgeonadaire.com",
        },
        {
          id: 2,
          name: "PT. The Adaire Solutions",
          desc: "PT. The Adaire Solutions's Homepage",
          logo: "https://images.burgeonadaire.com/adaire-solutions.webp",
          link: "https://adairesolutions.com",
        },
        {
          id: 3,
          name: "Lions Club International",
          desc: "Lions Club International's Homepage",
          logo: "https://images.burgeonadaire.com/lions-club-international.webp",
          link: "https://lionsclubs.org",
        },
      ]
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-9 py-3'>
            <div className='d-flex flex-column justify-content-between h-100'>
              <div className='d-flex flex-row'>
                <div>
                  <div className='vr bg-light h-25'></div>
                </div>
                <div className='margin-twentyfour-rl partner-margin-text-mobile'>
                  <h2 className='text-light pepperstone-header-mobile'>Partnering with Pepperstone</h2>
                  <p className='lead text-light pepperstone-text-mobile'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className='pepperstone-misc-mobile d-flex flex-row justify-content-between align-items-end'>
                <img alt="Pepperstone Official Partner" src="https://images.burgeonadaire.com/bai-pepperstone.webp" height={80}></img>
                <a href="https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=34824" className='btn btn-dark btn-pepperstone' rel='noopener'><span className='fw-medium'>Join Pepperstone Now!</span></a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 py-3 partner-right-container'>
            <div className='h-100 partner-right-box rounded d-flex justify-content-end p-4 position-relative'>
              <div>
                <a href="https://www.tradingview.com/?aff_id=139776&aff_sub=geraldzandisko&source=burgeonadaire" target='_blank' rel='noopener'>
                  <img alt="TradingView Partner" src="https://images.burgeonadaire.com/tradingview-logo.webp" width={160}></img>
                </a>
              </div>
              <div className='background-partner-overlay rounded'></div>
            </div>
          </div>
          <div className='col-lg-8 d-flex justify-content-end align-items-center py-3 another-partner-text-mobile'>
            <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='col-lg-4 d-flex justify-content-end align-items-center py-3 system-logo-mobile'>
            <img className='ms-4' src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" height={46} alt="Powered by AWS Cloud Computing"></img>
            <img className='ms-4' src="https://images.burgeonadaire.com/firebase.webp" height={46} alt="Built with Firebase"></img>
          </div>
          <div className='associates-box-mobile col-md-7 py-3 d-flex flex-column justify-content-evenly'>
            <div className='d-flex justify-content-end'>
              <img src="https://images.burgeonadaire.com/logo.webp" height={46} alt="PT. Burgeon Adaire International Logo"></img>
            </div>
            <div className='associates-text-mobile'>
              <h2 className='text-light'>Our Associates</h2>
              <p className='text-light lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='col-md-5 py-3'>
            <div className='partners-marquee-box d-flex flex-column justify-content-center'>
              <Marquee
                direction='right'
                gradient='true'
                gradientColor='#121217'
                gradientWidth={100}
              >
                {this.state.associates.map((element, i) => (
                  <a key={i} href={element.link} target='_blank' rel='noopener'>
                    <div className='partners-small-box p-4 rounded me-5'>
                      <img src={element.logo} height={56} alt={element.desc} className="partners-opacity"></img>
                    </div>
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    );
  }
}