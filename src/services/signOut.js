import { Auth } from 'aws-amplify'

export default async function signOut() {
  return await Auth.signOut()
}
