import { SET_SIZE_DATA,DELETE_SIZE_DATA } from './action'

let initialState = {
	sizeData: null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SIZE_DATA: {
			return { ...state, sizeData: action.data }
		}
        case DELETE_SIZE_DATA: {
            return { ...state, sizeData: null }
        }
		default:
			return state
	}
}
