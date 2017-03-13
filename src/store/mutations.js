import {
	SET_MSG
} from './mutations';

const mutations = {
	[SET_MSG] (state, msg) {
		state.case = msg;
	}
}

export default mutations;