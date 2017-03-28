import * as types from "./types.js"
import getters from './getters.js'

const state = {
	loading : false,
	blackHeaderIsTrue:false,
	greenHeaderIsTrue:false
}

const mutations = {
	[types.SHOWLOADING_SUCCESS](state){
		state.loading = true
	},
	[types.HIDELOADING_SUCCESS](state){
		state.loading = false
	},
	[types.BLACKHEADERISTRUE_SUCCESS](state){
		state.blackHeaderIsTrue = true
	},
	[types.GREENHEADERISTRUE_SUCCESS](state){
		state.greenHeaderIsTrue = true
	},
	[types.ALLHEADERISFALSE_SUCCESS](state){
		state.blackHeaderIsTrue = false;
		state.greenHeaderIsTrue = false;
	}
}

export default {
	state,
	mutations,
	getters
}
