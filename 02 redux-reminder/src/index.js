import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )

)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


