import axios, { type AxiosInstance } from "axios"
// import type { Configuration, ApiResponse } from "../models/runtime"

const baseURL = `http://0.0.0.0:8080`
const headers = {
  accept: `application/json`,
  // Authorization: `Bearer ${token_id}`
}

export const api: AxiosInstance = axios.create({
  baseURL,
  headers,
})

api.interceptors.response.use(
  (response) => {
    if (!response?.config || !response?.status) {
      return Promise.reject(response)
    }
    console.dir(response)
    console.log("response.config: ")
    console.dir(response.config)
    console.log("response.status: " + response.status)
    return response
  },
  (error) => {
    // 401: Unauthorized
    if (error.response.status === 401) {
      // TODO: logout
      api.delete(baseURL)
    }
    console.error(error)
    console.error(JSON.stringify(error))
    console.error(error.name)
    console.error(error.message)
    console.error(error.request)
    console.error(error.response)
    return Promise.reject(error)
  },
)
