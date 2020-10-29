import express from 'express'

const rootController = (req: express.Request, rep: express.Response) => {
  rep.render('pages/index')
}

export = rootController
