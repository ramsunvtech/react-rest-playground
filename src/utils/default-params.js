const methodType = 'get'

export const defaultInitialValues = {
  endpoint: {
    method: methodType,
    apiUrl: '',
  },
  parameters: {
    headers: [],
    query: [],
    body: [],
  },
}

export const defaultLabels = {
  endpoint: {
    placeholder: 'http://www.site.com/auth',
    testButton: 'test',
  },
  parameters: {
    query: {
      tabTitle: 'Query',
      addButton: 'Add Query',
      removeButton: 'Remove Query',
    },
    headers: {
      tabTitle: 'Headers',
      addButton: 'Add Header',
      removeButton: 'Remove Header',
    },
    body: {
      tabTitle: 'Body',
      addButton: 'Add Body',
      removeButton: 'Remove Body',
    },
  },
  result: {
    status: 'Status',
  },
}

export const noop = () => {}
