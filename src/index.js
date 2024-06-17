import ReactDOM from 'react-dom/client';
import WebHead from './components/WebHead';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { TickerTape } from "react-ts-tradingview-widgets";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <WebHead />
          <h1>Hallo</h1>
          <TickerTape colorTheme="dark"></TickerTape>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
