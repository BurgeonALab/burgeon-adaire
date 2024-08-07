// React
import ReactDOM from 'react-dom/client';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// CSS
import './css/style.css'
// Components
import { TickerTape } from "react-ts-tradingview-widgets";
import {
  HomeHead,
  Navbar,
  Footer,
  BAIJumbotron,
  AboutSection,
  GeraldContact,
} from './components';

function App() {
  return (
    <div className="bottom-footer-container container-fluid">
      <div className="row">
        <div className="col-md-12">
          <HomeHead />
          {/* <GeraldContact /> */}
          {/* <Navbar /> */}
          <BAIJumbotron />
          {/* <AboutSection /> */}
          {/* <TickerTape colorTheme="dark"></TickerTape> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
