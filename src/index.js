import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hallo</h1>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
