// React
import ReactDOM from 'react-dom/client';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import './css/style.css';
import './css/responsive.css';
import 'react-material-symbols/rounded';
// Router
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// Pages
import {
  HomePage
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
