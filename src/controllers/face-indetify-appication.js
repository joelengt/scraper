const debug = require('debug')('assistance-service:controllers:application-face')
import {microsoftCognitiveService} from '~/src/services'

class FaceIndetifyAppication {
  async identify (req, res) {
    try {
      if (req.files.hasOwnProperty('photo')) {
        // Get photo
        let photo = req.files.photo
        debug('file data >>>', photo)

        // get photo url
        var fullUrl = `${req.protocol}://${req.get('host')}`
        let photoURL = `${fullUrl}/face/${photo.name}`

        // // Face API - Detect Service
        let fieldsDetect = {url: 'https://scontent.flim2-1.fna.fbcdn.net/v/t1.0-9/15747598_1345729892146112_374717885659646740_n.jpg?oh=f0227aa38301ae70e8c023d90aba84d2&oe=5A10B045'}
        let serviceDetect = await microsoftCognitiveService.faceDetect(fieldsDetect)
        debug('DETECT RESPONSE ->>', serviceDetect)

        if (!serviceDetect.success) {
          let payload = serviceDetect
          return res[`${payload.statusCode}`](payload.data, 'Face Detec failt!')
        }

        // Face API - Identify Service
        let fieldsIdentify = {
          personGroupId: '1_worker',
          faceIds: [`${serviceDetect.data[0].faceId}`]
        }

        let serviceIdentify = await microsoftCognitiveService.faceIdentify(fieldsIdentify)
        debug('DETECT RESPONSE ->>', serviceIdentify)

        // TODO: Find user on db where candidates[0].personId

        let payload = serviceIdentify
        return res[`${payload.statusCode}`](payload.data, 'Face Detec success!')
      }

      let payload = {success: false}
      return res.ok(payload, 'Face upload fail!')
    } catch (err) {
      let payload = err
      return res['500'](payload, 'Face upload error!')
    }
  }
}

export default FaceIndetifyAppication
