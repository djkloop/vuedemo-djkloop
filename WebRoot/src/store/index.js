import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutaitions'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        mutations
    },
    actions
});
