import axios from 'axios'
import { useEffect } from 'react'
import qs from 'qs'

export default function useFetchApi(endpointData, onComplete) {
  const {
    method,
    url,
    headerParams = {},
    queryParams,
    bodyParams,
  } = endpointData
  const query = { params: queryParams }
  const body = qs.stringify(bodyParams)

  if (method !== 'get' && method !== 'delete') {
    headerParams['content-type'] = 'application/x-www-form-urlencoded'
  }

  const api = axios.create({
    headers: headerParams,
  })

  useEffect(() => {
    if (method === 'get') {
      api
        .get(url, query)
        .then(function (response) {
          onComplete(response)
        })
        .catch(function (error) {
          onComplete(error.response)
        })
    }
    if (method === 'post') {
      api
        .post(url, body)
        .then(function (response) {
          onComplete(response)
        })
        .catch(function (error) {
          onComplete(error.response)
        })
    }
    if (method === 'patch') {
      api
        .patch(url, body)
        .then(function (response) {
          onComplete(response)
        })
        .catch(function (error) {
          onComplete(error.response)
        })
    }
    if (method === 'put') {
      api
        .put(url, body)
        .then(function (response) {
          onComplete(response)
        })
        .catch(function (error) {
          onComplete(error.response)
        })
    }
    if (method === 'delete') {
      api
        .delete(url)
        .then(function (response) {
          onComplete(response)
        })
        .catch(function (error) {
          onComplete(error.response)
        })
    }
  }, [endpointData])
}
