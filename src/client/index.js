import { hydrateRoot } from 'react-dom/client';
import App from './App';
const domNode = document.getElementById('root');

hydrateRoot(domNode,
  <App />
);