import { defaultInitialValues, defaultLabels } from './default-params'

export default function overwriteDefaultParams({
  initialValues = {
    parameters: {},
  },
  labels = {},
}) {
  const endpoint = {
    ...defaultInitialValues.endpoint,
    ...initialValues.endpoint,
  }
  const parameters = {
    headers: initialValues?.parameters?.headers || [],
    query: initialValues?.parameters?.query || [],
    body: initialValues?.parameters?.body || [],
  }
  const endpointLabels = {
    ...defaultLabels.endpoint,
    ...labels.endpoint,
  }
  const parametersLabels = {
    query: {
      ...defaultLabels.parameters.query,
      ...(labels.endpoint?.query || {}),
    },
    headers: {
      ...defaultLabels.parameters.headers,
      ...(labels.endpoint?.headers || {}),
    },
    body: {
      ...defaultLabels.parameters.body,
      ...(labels.endpoint?.body || {}),
    },
  }
  const resultLabels = {
    ...defaultLabels.result,
    ...labels.result,
  }

  return {
    defaultValues: {
      method: endpoint.method,
      url: endpoint.apiUrl,
      queryParams: parameters.query,
      headerParams: parameters.headers,
      bodyParams: parameters.body,
    },
    endpoint,
    parameters,
    endpointLabels,
    parametersLabels,
    resultLabels,
  }
}
