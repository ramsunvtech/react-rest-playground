# react-rest-playground
Below is the example screenshot once component `<ReactRestPlayground />` rendered.

![React Rest Playground](react-rest-playground-demo.png "React Rest Playground")

## Implementation

```
const initialValues = {
  endpoint: {
    method: methodType,
    apiUrl: apiUrl,
  }
}

const labels = {
  endpoint: {
    placeholder: 'http://www.site.com/auth',
    testButton: 'Test Now',
  },
  result: {
    status: 'Response Status'
  }
}

<ReactRestPlayground
  initialValues={initialValues}
  labels={labels}
  onSend={onSend}
/>
```


## Demo
1. In React Project - https://codesandbox.io/s/react-rest-playground-example-in-react-js-project-d18zu
1. In React Typescript Project - https://codesandbox.io/s/react-rest-playground-example-in-react-tsx-nftcl
