import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { store, history } from "./configureStore";
import { RootContainer } from './containers/rootContainer';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
    <ThemeProvider theme={{}}>
        <Provider store={store}>
            <RootContainer history={history} />
        </Provider>
    </ThemeProvider>,
    document.getElementById("app"),
);

if (module.hot) {
    module.hot.accept();
}