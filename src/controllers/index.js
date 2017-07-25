import MicrosoftCognitive from '~/src/controllers/api-microsoft-cognitive'
import FaceIndetifyAppication from '~/src/controllers/face-indetify-appication'
import User from '~/src/controllers/users'
import AssistanceOverview from '~/src/controllers/assistance-application'

const microsoftCognitive = new MicrosoftCognitive()
const faceIndetifyAppication = new FaceIndetifyAppication()
const user = new User()
const assistanceOverview = new AssistanceOverview()

export default {
  microsoftCognitive,
  faceIndetifyAppication,
  user,
  assistanceOverview
}
