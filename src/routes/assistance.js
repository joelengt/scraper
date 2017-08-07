import {assistanceOverview} from '/controllers'
import express from 'express'
const router = express.Router()

router.route('/start')
  .post(assistanceOverview.getStart)

export default router
