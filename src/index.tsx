import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';
import { stores } from './store';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <Provider {...stores}>
            <App />
        </Provider>
    </AppContainer>,
    rootEl
);

const anyModule: any = module;

// Hot Module Replacement API
if (anyModule.hot) {
    anyModule.hot.accept('./app', () => {
        const makeNextApp = require('./app').default;
        const nextApp = makeNextApp(['app']);
        ReactDOM.render(
            <AppContainer>
                <nextApp.App />
            </AppContainer>,
            rootEl
        );
    });
}
