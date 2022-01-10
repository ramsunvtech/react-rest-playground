import React from 'react'
import ReactRestPlayground from '../index'
import '../styles/main.css'

export default {
  title: 'React Rest Playground',
  component: ReactRestPlayground,
}

// Props.
const methodType = 'get'
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
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
    testButton: 'Test Now',
  },
  result: {
    status: 'Response Status',
  },
}

const Template = (args) => <ReactRestPlayground {...args} />

export const reactRestPlayground = Template.bind({})
reactRestPlayground.args = { initialValues, labels, onSend }
