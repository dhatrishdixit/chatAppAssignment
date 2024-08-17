import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/custom/header'
import { Button } from './components/ui/button'
import Chat from './components/pages/chat-section/chat'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { ColorRing } from 'react-loader-spinner'

function App() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/sign-in')
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#f97316','#f97316','#f97316','#f97316','#f97316']}
      />
    </div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header /> {/* Ensure the header has a height of 64px */}
      <div className="flex-1">
        <Chat />
      </div>
    </div>
  )
}

export default App
