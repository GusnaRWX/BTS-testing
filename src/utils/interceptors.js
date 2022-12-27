import axios from 'axios'
import { Logger } from './logger'
import { getStorage } from './storage'

export const logResponser = (res) => {
  if (!res) return null
  const { config } = res
  const loadTime = performance.now()
  const url = config.url.replace(process.env.REACT_APP_API_KEY_URL, '')

  // * Send Response to logger
  Logger(`${config.method.toUpperCase()} ${url}`, {
    responseTime: loadTime,
    status: res.status,
    statusText: res.statusText,
    error: res?.data?.meta?.error || '',
    message: res?.data?.meta?.message || ''
  })
}

const service = axios.create({
  baseURL: process.env.REACT_APP_API_KEY_URL || 'http://localhost',
  headers: {
    Authorization: {
      toString () {
        return `Bearer ${getStorage('_test_token')}`
      }
    },
    version: process.env.REACT_APP_VERSION || 'v1.0.0'
  }
})

service.interceptors.response.use(function (res) {
  if (process.env.NODE_ENV !== 'production')
    logResponser(res)
  return res
}, function (error) {
  const err = error?.response
  if (process.env.NODE_ENV !== 'production')
    logResponser(err)

  return Promise.reject(err)
})

export const get = (url, params) => {
  return service.get(`${url}`, {
    params
  })
}

export const post = (url, body) => {
  return service.post(`${url}`, body)
}

export const put = (url, body) => {
  return service.put(`${url}`, body)
}


export const del = (url, params) => {
  return service.delete(`${url}`, {
    params
  })
}

