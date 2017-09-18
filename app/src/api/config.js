import axios from 'axios';

let BaseURL;
if (process.env === 'development') {
	BaseURL = 'http://localhost:8080/api';
}else{
	BaseURL = 'http://localhost:8080/api';
};


axios.defaults.headers.common['accessToken'] = 123;
axios.defaults.headers.common['projId'] = 213;

export {BaseURL,axios};