import { Auth } from 'lib-app/aws-amplify'

export default async function resendConfirmationCode(username) {
  return await Auth.resendSignUp(username)
}
