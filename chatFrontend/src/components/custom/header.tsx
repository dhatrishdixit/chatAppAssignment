import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const {user, isSignedIn} = useUser();
    
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
        <h1 className='text-primary text-pretty font-semibold text-2xl'>Convo</h1>
        {
            isSignedIn ? (
                <div className='flex gap-2 items-center'>
                    <UserButton/>
                </div>
            ):(
                <Link to={'/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            )
        }
    </div>
  )
}

export default Header