import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

ReactDOM.render(<App />, document.getElementById('root'));
