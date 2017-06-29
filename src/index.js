// libs
import React from 'react';
import ReactDOM from 'react-dom';
// components
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
// css
require('./index.css');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function Root() {
    return (
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    );
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
