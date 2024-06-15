import ReactDOM from 'react-dom/client';
import WebHead from './components/WebHead';

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
