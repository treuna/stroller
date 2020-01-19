import axios from 'axios'

const api = axios.create({
  baseUrl: 'http://localhost:3000/api'
})

export const createStroller = payload => api.post(`/stroller`, payload)
export const updateStroller = (id, payload) => api.put(`/stroller${id}`, payload)
export const deleteStroller = id => api.delete(`/stroller${id}`)
export const getStrollers = () => api.get(`/strollers`)
export const getStrollerById = id => api.get(`/stroller${id}`)

const apis = {
  createStroller,
  updateStroller,
  deleteStroller,
  getStrollers,
  getStrollerById,
}

export default apis