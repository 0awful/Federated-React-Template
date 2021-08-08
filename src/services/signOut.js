import { Auth } from 'lib-app/aws-amplify'

export default async function signOut() {
  return await Auth.signOut()
}
