import React, { useState } from 'lib-app/react'
import { Link } from 'lib-app/react-router-dom'

export default function SignUp() {
  const [phone, updatePhone] = useState()
  const [email, updateEmail] = useState()
  const [zip, updateZip] = useState()

  return (
    <form className='grid grid-cols-2 gap-4 w-80'>
      <label htmlFor='phone' className='input-label'>
        phone number
      </label>
      <input
        type='tel'
        name='phone'
        id='phone'
        placeholder='phone'
        value={phone}
        onChange={(e) => {
          updatePhone(e.target.value)
        }}
      />
      <label htmlFor='email' className='input-label'>
        email
      </label>
      <input
        type='email'
        className='email'
        placeholder='email'
        value={email}
        onChange={(e) => {
          updateEmail(e.target.value)
        }}
      />
      <label htmlFor='zip' className='input-label'>
        zip
      </label>
      <input
        type='number'
        name='zip'
        id='zip'
        maxLength='10'
        minLength='4'
        placeholder='zip'
        required
        value={zip}
        onChange={(e) => {
          updateZip(e.target.value)
        }}
      />
      <button
        onClick={() => {
          signUpRequest({
            phone,
            email,
            zip,
          })
        }}
      >
        submit
      </button>
      <Link to='/sign-in'>
        <p>I already have an account</p>
      </Link>
    </form>
  )
}
