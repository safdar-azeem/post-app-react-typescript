import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../types/post.type'
import { IForm } from '../types/form.type'

interface Iprops {
	handleSetPosts: (post: IPost) => void
}

const AddPost = ({ handleSetPosts }: Iprops) => {
	const navigate = useNavigate()

	const [form, setForm] = useState<IForm>({
		image: '',
		title: '',
		description: '',
		createdAt: new Date(),
	})

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target
		setForm({
			...form,
			[name]: value,
		})
	}

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return
		const img = event.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(img)
		reader.onload = () => {
			setForm({
				...form,
				image: reader.result,
			})
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		handleSetPosts(form)
		navigate('/')
	}

	return (
		<form
			className='mx-auto'
			style={{ width: '550px' }}
			onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label
					htmlFor='formFile'
					className='form-label'>
					Cover Image
				</label>
				<input
					className='form-control'
					type='file'
					name='image'
					onChange={handleImageUpload}
					id='formFile'
				/>
				{form.image && (
					<img
						src={form.image.toString()}
						alt=''
						className='w-25 mt-3'
					/>
				)}
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlInput1'
					className='form-label'>
					Post Title
				</label>
				<input
					type='text'
					className='form-control'
					id='exampleFormControlInput1'
					value={form.title}
					onChange={handleChange}
					name='title'
					placeholder='Enter Post Title'
				/>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlTextarea1'
					className='form-label'>
					Post Description
				</label>
				<textarea
					className='form-control'
					onChange={handleChange}
					value={form.description}
					name='description'
					id='exampleFormControlTextarea1'></textarea>
			</div>
			<button className='btn btn-lg w-100 btn-success'>Submit</button>
		</form>
	)
}

export default AddPost
