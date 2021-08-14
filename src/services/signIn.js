import { Auth } from 'aws-amplify'

export default async function signIn({ username, password }) {
  return await Auth.signIn(username, password)
}
