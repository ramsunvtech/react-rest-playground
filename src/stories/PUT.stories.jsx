import React from 'react'
import ReactRestPlayground from '../index'
import '../styles/main.css'

export default {
  title: 'HTTP Methods/PUT',
  component: ReactRestPlayground,
}

// Props.
const methodType = 'put'
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
const onSend = (payload) => {
  console.log(payload)
}

const headers = [
  { key: 'Content-type', value: 'application/json; charset=UTF-8' },
]

const body = [
  { key: 'id', value: 1 },
  { key: 'title', value: 'foo' },
  { key: 'body', value: 'bar' },
  { key: 'userId', value: 1 },
]

const initialValues = {
  endpoint: {
    method: methodType,
    apiUrl: apiUrl,
  },
  parameters: { body, headers },
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
