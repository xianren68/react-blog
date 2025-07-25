import React from 'react'
import { Link } from 'react-router-dom'

const MainCategories: React.FC = () => {
	return (
		<div className="hidden md:flex items-center justify-center gap-8 bg-white rounded-2xl xl:rounded-full p-4 shadow-lg">
			<div className="flex-1 flex items-center justify-between flex-wrap">
				<Link to="/posts" className="bg-blue-800 rounded-full text-white px-4 py-2">
					All Posts
				</Link>
				<Link to="/posts" className="hover:bg-blue-50 rounded-full px-4 py-2">
					Web Design
				</Link>
				<Link to="/posts" className="hover:bg-blue-50 rounded-full px-4 py-2">
					Development
				</Link>
				<Link to="/posts" className="hover:bg-blue-50 rounded-full px-4 py-2">
					Databases
				</Link>
				<Link to="/posts" className="hover:bg-blue-50 rounded-full px-4 py-2">
					Search Engines
				</Link>
				<Link to="/marketing" className="hover:bg-blue-50 rounded-full px-4 py-2">
					Marketing
				</Link>
			</div>
			<span className="text-xl font-medium">|</span>
			<div className="flex items-center bg-gray-100 p-2 rounded-full gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray">
					<circle cx="10.5" cy="10.5" r="7.5"></circle>
					<line x1="16.5" y1="16.5" x2="22" y2="22"></line>
				</svg>
				<input type="text" placeholder="search a post..." className="border-0 outline-none bg-transparent" />
			</div>
		</div>
	)
}

export default MainCategories
