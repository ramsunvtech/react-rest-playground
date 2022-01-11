import React from 'react'
import ReactRestPlayground from '../index'
import '../styles/main.css'

export default {
  title: 'HTTP Methods/GET',
  component: ReactRestPlayground,
}

// Props.
const methodType = 'get'
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
const onSend = (payload) => {
  console.log(payload)
}

const initialValues = {
  endpoint: {
    method: methodType,
    apiUrl: apiUrl,
  },
}

const labels = {
  endpoint: {
    placeholder: 'http://www.site.com/auth',
    testButton: 'Send Request',
  },
  result: {
    status: 'Response Status',
  },
}

const Template = (args) => <ReactRestPlayground {...args} />

export const reactRestPlayground = Template.bind({})
reactRestPlayground.args = { initialValues, labels, onSend }
