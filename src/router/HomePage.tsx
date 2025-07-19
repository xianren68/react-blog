import {Link} from "react-router-dom"
import MainCategories from "../conponents/MainCategories.tsx"
import FeaturedPosts from '../conponents/FeaturedPosts.tsx'

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
        {/*面包屑*/}
        <div className="flex gap-4">
            <Link to="/home">Home</Link>
            <span>·</span>
            <span className="text-blue-800">Blogs and Articles</span>
        </div>
        {/*标题*/}
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold leading-snug">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
                <p className="mt-4 text-md md:text-xl leading-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio corporis quia voluptatem aliquam facere rem quaerat voluptate soluta, unde perspiciatis officiis quidem expedita nihil assumenda accusantium praesentium ducimus, autem non!</p>
            </div>
            <Link to="/write" className="relative hidden md:block">
                <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="text-lg tracking-widest animate-spin animated-button">
                    <path
                        id="circlePath"
                        fill="none"
                        d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
                    ></path>
                    <text>
                        <textPath href="#circlePath" startOffset="0%">write your story ·</textPath>
                        <textPath href="#circlePath" startOffset="50%">share your idea ·</textPath>
                    </text>
                </svg>
                <button className="rounded-full bg-blue-500 flex items-center justify-center absolute top-0 right-0 bottom-0 left-0 m-auto w-20 h-20">
                    {/* 箭头svg */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2">
                        <line x1="6" y1="18" x2="18" y2="6"></line>
                        <polyline points="9 6 18 6 18 15"></polyline>
                    </svg>
                </button>
            </Link>
        </div>
    {/*    分类*/}
        <MainCategories></MainCategories>
    {/*    热门*/}
        <FeaturedPosts></FeaturedPosts>
    </div>
  )
}

export default HomePage