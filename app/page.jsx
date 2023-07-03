/*
TOOD:
Figure out the issue with no data on initial load
*/


import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import Player from '../components/Player'

export default async function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}