import express from 'express'

const errorController = (req: express.Request, rep: express.Response) => {
  rep.render('pages/error')
}

export = errorController
