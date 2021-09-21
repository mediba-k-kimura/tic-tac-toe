import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { app } from './reducers'
import { GameContainer } from "./containers";
import './index.css';

const store = createStore(app);
ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
   document.getElementById('root')
);