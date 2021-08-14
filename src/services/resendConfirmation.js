import { Auth } from 'aws-amplify'

export default async function resendConfirmationCode(username) {
  return await Auth.resendSignUp(username)
}
