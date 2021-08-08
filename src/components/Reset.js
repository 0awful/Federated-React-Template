import React, { useState } from 'lib-app/react'

export default function Reset() {
  const [code, updateCode] = useState()
  return (
    <form className='grid grid-cols-2 gap-4 w-80'>
      <label htmlFor='code' className='input-label'>
        code
      </label>
      <input
        type='tel'
        name='code'
        id='code'
        placeholder='******'
        value={code}
        onChange={(e) => {
          updateCode(e.target.value)
        }}
      />
    </form>
  )
}
