const getController = (req, res) => {
  /* Logic */
  res.send('Controller expects GET Req')
}

const postController = (req, res) => {
  /* Logic */
  res.send('Controller expects POST Req')
}

const deleteController = (req, res) => {
  /* Logic */
  res.send('Controller expects DELETE Req')
}

const putController = (req, res) => {
  /* Logic */
  res.send('Controller expects PUT Req')
}

export { getController, postController, deleteController, putController }
