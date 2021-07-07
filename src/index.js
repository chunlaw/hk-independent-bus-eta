import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals';
import { DbProvider } from './DbContext'
import { AppContextProvider } from './AppContext'
import './i18n'

const isHuman = () => {
  const agents = ['googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot', 'facebot', 'ia_archiver', 'sitecheckerbotcrawler']
  return !navigator.userAgent.match(new RegExp(agents.join('|'), 'i'))
}

// content is render only for human
if (isHuman()){
  // remove prerendered style
  document.querySelectorAll('style').forEach(e => e.parentNode.removeChild(e))
  ReactDOM.render(
    <React.StrictMode>
      <DbProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DbProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
