// React
import ReactDOM from 'react-dom/client';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// CSS
import './css/style.css'
// Components
import { TickerTape } from "react-ts-tradingview-widgets";
import WebHead from './components/WebHead';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bottom-footer-container container-fluid">
      <div className="row">
        <div className="col-md-12">
          <WebHead />
          <Navbar />
          <h1>Hallo</h1>
          <TickerTape colorTheme="dark"></TickerTape>
        </div>
      </div>
      <div class="footer">
        <p className="text-center">This is footer!</p>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
