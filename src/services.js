import axios from 'axios'

/* eslint-disable no-console */

// NOTE(adam): based on repo example
// simple log of error does not include stacktrace
const logError = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(error.response.statusText, error.response)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Unknown Axios Error', error.message)
  }
}
/* eslint-enable no-console */

const interceptors = [
  response => response,
  error => logError(error) || Promise.reject(error),
]

export const Api = axios.create({
  baseURL: 'https://nss-alumni.herokuapp.com/api',
})

Api.interceptors.response.use(...interceptors)

export const Firebase = axios.create({
  baseURL: 'https://alumni-website-ba2fc.firebaseio.com',
})

Firebase.interceptors.response.use(...interceptors)
