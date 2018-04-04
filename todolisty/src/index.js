import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger';
import rootReducer from './redux/reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middlewares = compose(
    applyMiddleware(logger)
)

const store = createStore(rootReducer, middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();