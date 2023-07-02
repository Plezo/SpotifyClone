'use client'

import { shuffle } from 'lodash'
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../atoms/playlistAtom'
import { useSession } from 'next-auth/react';
import useSpotify from '../hooks/useSpotify';
import Image from 'next/image';

const colors = [
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500'
];

function CenterSection() {
    const { data: session } = useSession();
    const spotifyApi = useSpotify();
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistState);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [playlistId]);

    useEffect(() => {
        spotifyApi
        .getPlaylist(playlistId)
        .then((data) => { 
            setPlaylist(data.body);
        })
        .catch((err) => console.log('Something went wrong!', err))
    }, [spotifyApi, playlistId])

    return (
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
            <Image 
            className='h-44 w-44 shadow-2xl'
            src={playlist?.images[0]?.url}
            // fill={true}
            width={250}
            height={250}
            alt=''/>

            <div>
                <p>PLAYLIST</p>
                <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>
                    {playlist?.name}
                </h1>
            </div>
        </section>
    )
}

export default CenterSection