import * as React from 'react';
import Test from './container/Test';
import { Provider } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends React.Component<any,{}> {
  render() {
    const { store, history } = this.props;
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <div>
              <h1>Hello from my awesome React app</h1>
              <Test />
            </div>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}