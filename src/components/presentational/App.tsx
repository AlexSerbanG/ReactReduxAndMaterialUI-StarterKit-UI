import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component<{},{}> {
    render() {
        return(
          <MuiThemeProvider>
            <div>
              <RaisedButton 
              label="test"
              primary={true}
               />
              <h1>Hello from my awesome React app tests</h1>
            </div>
          </MuiThemeProvider>
        );
    }
}