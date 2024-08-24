import React, { Component } from 'react';
import {
  HomeHead,
  Navbar,
  Footer,
  BAIJumbotron,
  AboutSection,
  GeraldContact,
  CompanyAbstract,
  BurgeonOperations,
  BurgeonOutro,
  BurgeonPartners,
} from '../components';

export default class HomePage extends Component {
  render() {
    return (
      <div className="bottom-footer-container container-fluid">
        <div className="row">
          <div className="col-md-12">
            <HomeHead />
            <GeraldContact />
            <Navbar />
            <BAIJumbotron />
            <AboutSection />
            <CompanyAbstract />
            <BurgeonOperations />
            <BurgeonOutro />
            <BurgeonPartners />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}