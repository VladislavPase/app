import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {reRender} from "./render";
import state from "./state";

reRender(state)


serviceWorker.unregister();
