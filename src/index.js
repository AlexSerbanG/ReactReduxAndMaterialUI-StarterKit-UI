import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import configureStore, { history } from './store/configureStore';
let injectTapEventPlugin = require('react-tap-event-plugin');
require('./favicon.ico');


injectTapEventPlugin();
const store = configureStore();

render(
  <AppContainer>
      <App store={store} history={history}/>
  </AppContainer>,
  document.getElementById('my-app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewRoot = require('./components/App').default;
    render(
        <NewRoot store={store} history={history}/>,
      document.getElementById('my-app')
    );
  });
}