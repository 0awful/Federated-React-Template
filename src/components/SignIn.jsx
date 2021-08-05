import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [phone, updatePhone] = useState()
  const [email, updateEmail] = useState()
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
      <input type='button' id='submit' />

      <button
        onClick={() => {
          signInRequest({
            phone,
            email,
          })
        }}
      >
        submit
      </button>
      <Link to='/sign-up'>
        <p>I don't have an account</p>
      </Link>
    </form>
  )
}
