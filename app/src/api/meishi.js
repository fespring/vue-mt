import axios from 'axios';

import {url} from './config';

let getList=(page)=>{
    console.log(page);
    return axios.get(`${url}meishi?page=${page}`);
}

export {getList}