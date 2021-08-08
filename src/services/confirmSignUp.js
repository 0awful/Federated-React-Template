import { Auth } from 'lib-app/aws-amplify'

export default async function confirmSignUp({ username, code }) {
  return await Auth.confirmSignUp(username, code)
}
