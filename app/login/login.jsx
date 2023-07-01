'use client'

import { signIn } from 'next-auth/react';

function Login({ provider }) {
  return (
    <div>
        <button 
        className='bg-[#18D860] text-black p-5 rounded-full'
        onClick={() => signIn(provider.id, { callbackUrl: '/' })}
        >
            Login with {provider.name}
        </button>
    </div>
  )
}

export default Login