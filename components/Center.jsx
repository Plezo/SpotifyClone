import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/auth';
import Image from 'next/image';
import Songs from './Songs';

import CenterSection from './CenterSection'

async function Center() {
    const session = await getServerSession({ authOptions });

    return (
        <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
            <header className='absolute top-5 right-8'>
                <div className='flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 bg-black text-white'>
                    <Image 
                    className='rounded-full w-10 h-10'
                    src={session?.user.image}
                    width={500}
                    height={500}
                    alt=''
                    />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className='h-5 w-5'/>
                </div>
            </header>

            <CenterSection />

            <Songs />
        </div>
    )
}

export default Center