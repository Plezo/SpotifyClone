/*
TOOD:
Figure out the issue with no data on initial load
*/


import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../lib/auth'

export default async function Home() {
  const session = await getServerSession({ authOptions })

  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}