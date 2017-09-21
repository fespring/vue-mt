import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        num:1,
        list:[],
        page:0
    },
    mutations:{
        setshoplist(state,newData){
            state.list=state.list.concat(newData);
        },
        nextpage(state){
            state.page++;
        }
    }

});