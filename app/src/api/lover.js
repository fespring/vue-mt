import {BaseURL, axios} from './config';

//-----------------------------------lovers列表---------------------------------------------
export const getLovers = params => {
     return axios.get(`${BaseURL}/lovers`, { params: params })
};
