import Sidebar from '../components/Sidebar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../lib/auth'

export default async function Home() {
  const session = await getServerSession({ authOptions })

  console.log(session)

  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
