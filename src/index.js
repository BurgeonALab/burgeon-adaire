import ReactDOM from 'react-dom/client';
import WebHead from './components/WebHead';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <WebHead />
      <h1>Hallo</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
