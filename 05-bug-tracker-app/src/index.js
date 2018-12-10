import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugTracker from './bugTracker/BugTracker';
import BugsCollectionModel from './bugTracker/models/BugsCollectionModel';

import * as mobx from 'mobx';

window['mobx'] = mobx;
window['model'] = new BugsCollectionModel();

import axios from 'axios';

window['axios'] = axios;

ReactDOM.render(<BugTracker model={model} />,
	document.getElementById('root'));
