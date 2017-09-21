import * as React from 'react';
import { render } from 'react-dom';
import App from './components/presentational/App';
import { AppContainer } from 'react-hot-loader';

render(
  <AppContainer>
      <App/>
  </AppContainer>,
  document.getElementById('my-app')
);

if (module.hot) {
  module.hot.accept('./components/presentational/App', () => {
    const NewRoot = require('./components/presentational/App').default;
    render(
        <NewRoot />,
      document.getElementById('my-app')
    );
  });
}