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
  const body = qs.stringify(bodyParams)

  if (method !== 'get' && method !== 'delete') {
    headerParams['content-type'] = 'application/x-www-form-urlencoded'
  }

  const api = axios.create({
    headers: headerParams,
  })

  useEffect(() => {
    const apiMethod = api[method]
    if (!apiMethod) {
      return
    }

    const query = { params: queryParams }
    const apiParameters = {
      get: query,
      post: body,
      patch: body,
      put: body,
      delete: undefined,
    }
    const params = apiParameters[method]
    apiMethod(url, params)
      .then(function (response) {
        onComplete(response)
      })
      .catch(function (error) {
        onComplete(error.response)
      })

  }, [api, method, onComplete, url, body, queryParams])
}
