import React from 'react'
import Comment from './comment.tsx'
const Comments: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
            <h1 className="text-gray-500 text-xl underline">Comments</h1>
            <form className="flex items-center justify-between gap-8">
                <textarea placeholder="write a comment..." className="w-full bg-white p-4 rounded-xl"></textarea>
                <button className="px-4 py-3 rounded-xl bg-blue-800 text-white font-medium"> Send </button>
            </form>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
        </div>
    )
}

export default Comments