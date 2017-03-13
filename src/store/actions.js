import {
	SET_MSG
} from './mutations.js'

const actions = {
	setMsg: ({commit}, msg) => commit(SET_MSG, msg)
}

export default actions;