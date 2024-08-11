// React
import ReactDOM from 'react-dom/client';
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import './css/style.css'
import 'react-material-symbols/rounded';
// Components
import {
  HomeHead,
  Navbar,
  Footer,
  BAIJumbotron,
  AboutSection,
  GeraldContact,
  CompanyAbstract,
  BurgeonOperations,
} from './components';

function App() {
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
