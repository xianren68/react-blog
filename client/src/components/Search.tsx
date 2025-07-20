import React from 'react'

const Search: React.FC = () => {
    return (
        <div className="flex items-center bg-gray-100 p-2 rounded-full gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray">
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
            </svg>
            <input type="text" placeholder="search a post..." className="border-0 outline-none bg-transparent" />
        </div>
    )
}

export default Search