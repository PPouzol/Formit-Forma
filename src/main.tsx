import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <div id="MainControls">
      <HashRouter>
        <App />
      </HashRouter>
    </div>
  </>
);
