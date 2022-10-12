import React from 'react'
import Post from './Post'
import { IPost } from '../types/post.type'

interface Iprops {
	posts: IPost[]
	handlePostDelete: (id: number) => void
}

const PostList = ({ posts, handlePostDelete }: Iprops) => {
	return (
		<div className='row row row-cols-3 gy-4 mt-4'>
			{posts.length > 0 &&
				posts.map((post: IPost) => {
					return (
						<Post
							post={post}
							handlePostDelete={handlePostDelete}
						/>
					)
				})}
		</div>
	)
}

export default PostList
