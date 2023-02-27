import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

var content = 
  <HashRouter>
    <App />
  </HashRouter>;

root.render(content);
