import React from 'react'
import Image from './Image.tsx'
import { Link } from 'react-router-dom'
// 热门帖子
const FeaturedPosts:React.FC = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/*第一*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/*    图片*/}
                <Image src="featured1.jpeg" alt="featured1" className="rounded-3xl object-cover"></Image>
            {/*    详情*/}
                <div className="flex items-center gap-5">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link to="/Web-design" className="text-blue-800 lg:text-lg">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
            {/*    标题*/}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-blod">Lorem dsf sdfin sdif ei fsdim g</Link>
            </div>
            {/*其他*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image src="featured2.jpeg" alt="featured1" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">02.</h1>
                            <Link to="/Web-design" className="text-blue-800 lg:text-lg"> Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-xl md:text-2xl lg: text-xl xl: text-2xl font-medium">Lorem dsf sdfin sdif ei fsdim g</Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image src="featured2.jpeg" alt="featured1" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">03.</h1>
                            <Link to="/Web-design" className="text-blue-800 lg:text-lg"> Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-xl md:text-2xl lg: text-xl xl: text-2xl font-medium">Lorem dsf sdfin sdif ei fsdim g Lorem dsf sdfin sdif ei fsdim g Lorem dsf sdfin sdif ei fsdim g</Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image src="featured2.jpeg" alt="featured1" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">04.</h1>
                            <Link to="/Web-design" className="text-blue-800 lg:text-lg"> Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-xl md:text-2xl lg: text-xl xl: text-2xl font-medium">Lorem dsf sdfin sdif ei fsdim g</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts