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
          desc: "Lions Club International's Hompage",
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
          <div className='col-md-12 py-3'>
            <div className='partner-text-center'>
              <h2 className='text-light'>Lorem Ipsum</h2>
              <p className='lead text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='col-md-6 py-3'>
            <h3 className='text-light fw-light text-center mb-0'>Associates</h3>
            <Marquee>
              {this.state.associates.map((element, i) => (
                <a key={i} href={element.link} target='_blank' rel='noopener'>
                  <img src={element.logo} height={56} alt={element.desc} className="partners-opacity valbury my-5 mx-5"></img>
                </a>
              ))}
            </Marquee>
          </div>
          <div className='col-md-6 py-3'>
            <h3 className='text-light fw-light text-center mb-0'>Partners</h3>
          </div>
        </div>
      </div>
    );
  }
}