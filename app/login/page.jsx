import { getProviders } from 'next-auth/react';
import Image from 'next/image'
import spotifyImg from '../../public/spotify.png'
import Login from './login';

async function LoginPage() {

    const providers = await getProviders();

    return (
        <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'> 
            <Image 
            className='w-52 mb-5'
            src={spotifyImg}
            alt='' 
            />

            {Object.values(providers).map((provider) => (
                <Login provider={provider} key={provider.name} />
            ))}
        </div>
    )
}

export default LoginPage;