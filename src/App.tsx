import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost'
import Header from './components/Header'
import PostList from './components/PostList'
import { IForm } from './types/form.type'
import { IPost } from './types/post.type'

const App = () => {
	const [posts, setPosts] = useState<IPost[]>([])

	const handleSetPosts = (formData: IForm) => {
		const post: IPost = { ...formData, id: posts.length + 1 }
		setPosts([...posts, post])
	}

	const handlePostDelete = (id: number) => {
		const newPosts = posts.filter((post: IPost) => post.id !== id && post)
		setPosts(newPosts)
	}

	return (
		<div className='container mt-4'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							<PostList
								posts={posts}
								handlePostDelete={handlePostDelete}
							/>
						}
					/>
					<Route
						path='/add-post'
						element={<AddPost handleSetPosts={handleSetPosts} />}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
