import { Auth } from 'lib-app/aws-amplify'

export default async function signUp({
  password,
  email,
  phone: phone_number,
  zip,
}) {
  const { user } = await Auth.signUp({
    username: email || phone_number,
    password,
    attributes: {
      email,
      phone_number,
      'custom:zip': zip,
    },
  })
  return user
}
