export const methodType = "get"

export const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"

export const headerDetails = [{key: 'Auth', value: '1234'}]

export const queryParamDetails = [{key: 'title', value: 'test title'}]

export const bodyDetails = [{key: 'title', value: 'test title'}, {key: 'body', value: 'test body'}, {key: 'userId', value: 1}]

export const onSend = (payload) => { console.log(payload) }
