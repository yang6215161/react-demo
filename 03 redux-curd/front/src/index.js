import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GamesPage from './components/GamesPage';
import GameForm from './components/GameForm';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";

const  store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger,thunk)
    )
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='ui container'>
                <div className='ui three item menu'>
                    <NavLink exact activeClassName='active' className="item" to='/'>Home</NavLink>
                    <NavLink exact activeClassName='active' className="item" to='/games'>Game</NavLink>
                    <NavLink activeClassName='active' className="item" to='/games/new'>Add New Game</NavLink>
                </div>
                <Route exact path="/" component={App}/>
                <Route exact path="/games" component={GamesPage}/>
                <Route path='/games/new' component={GameForm}/>
                <Route path='/game/:_id' component={GameForm}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
