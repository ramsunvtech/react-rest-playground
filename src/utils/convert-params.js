const convertParams = (data) => {
  const params = {}

  data.forEach(({ key, value }) => {
    if (key != '' && value != '') {
      params[key] = value
    }
  })

  return params
}

export default convertParams
