import {faceIndetifyAppication} from '~/src/controllers'
import express from 'express'
const router = express.Router()

// Face application - update image and indentify service microsoftCognitive
router.route('/check-face')
  .post(faceIndetifyAppication.identify)

export default router
