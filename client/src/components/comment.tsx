import React from 'react'
import Image from './Image.tsx'

const Comment: React.FC = () => {
    return (
        <div className="w-full rounded-xl bg-white p-4">
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" alt="user" w={40} className="w-10 h-10 rounded-full"/>
                <span className="font-semibold">Xianren</span>
                <span className="text-gray-500">2 days ago</span>
            </div>
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
        </div>
    )
}

export default Comment