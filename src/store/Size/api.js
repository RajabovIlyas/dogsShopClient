import apiFetch from '../../api'

const api = '/size'

export default {
	getSize: (params) => apiFetch(`${api}`, { method: 'get', params }, true),
}
