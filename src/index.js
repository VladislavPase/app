import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./state";
import ReactDOM from "react-dom";
import App from "./App";

let reRender = (state) => {
    ReactDOM.render(<App state={state} store={store}
                         dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
};

reRender(store.getState());

store.subscribe(reRender);

serviceWorker.unregister();
