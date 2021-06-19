import sizeAPI from './api'
import { message } from 'antd'

export const SET_SIZE_DATA = 'SET_SIZE_DATA'
export const DELETE_SIZE_DATA = 'DELETE_SIZE_DATA'

const setSizeAction = (data) => ({ type: SET_SIZE_DATA, data })
const deleteSizeAction = () => ({ type: DELETE_SIZE_DATA })

export const getSizeThunk = (data) => (dispatch) => {
	sizeAPI.getSize(data).then(
		(data) => {
			dispatch(setSizeAction(data))
		},
		(error) => {
			dispatch(setSizeAction(error.response.data))
		}
	)
}

export const getSizeNewVersionThunk = (data) => (dispatch) => {
	sizeAPI.getSizeNewVersion(data).then(
		(data) => {
			dispatch(setSizeAction(data))
		},
		(error) => {
			dispatch(setSizeAction(error.response.data))
		}
	)
}

export const deleteSizeThunk = () => (dispatch) => {
	dispatch(deleteSizeAction());
}
