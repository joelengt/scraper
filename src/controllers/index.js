import MicrosoftCognitive from '~/src/controllers/api-microsoft-cognitive'
import FaceIndetifyAppication from '~/src/controllers/face-indetify-appication'
const microsoftCognitive = new MicrosoftCognitive()
const faceIndetifyAppication = new FaceIndetifyAppication()

export default {
  microsoftCognitive,
  faceIndetifyAppication
}
