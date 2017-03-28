import * as types from "./types.js"

export default {
	[types.SHOWLOADING]: ({
		commit
	}) => {
		commit(types.SHOWLOADING_SUCCESS)
	},
	[types.HIDELOADING]: ({
		commit
	}) => {
		commit(types.HIDELOADING_SUCCESS)
	},
	[types.BLACKHEADERISTRUE]:({commit}) => {
		commit(types.BLACKHEADERISTRUE_SUCCESS)
	},
	[types.GREENHEADERISTRUE]:({commit}) => {
		commit(types.GREENHEADERISTRUE_SUCCESS)
	},
	[types.ALLHEADERISFALSE]:({commit}) => {
		commit(types.ALLHEADERISFALSE_SUCCESS)
	}
}