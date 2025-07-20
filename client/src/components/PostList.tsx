import React from 'react'
import PostListItem from './PostListItem'

const PostList: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
            <PostListItem></PostListItem>
        </div>
    )
}

export default PostList