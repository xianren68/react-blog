import React from 'react'
import 'react-quill-new/dist/quill.snow.css'
import ReactQuill from 'react-quill-new'
const Write: React.FC = () => {
	return (
		<div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
			<h1 className="text-gray-500 font-medium text-3xl">Create a new Post</h1>
			<form action="" className="flex flex-col flex-1 gap-6 mb-6">
				<button className="bg-white w-max rounded-2xl py-3 px-4">Add a cover Image</button>
				<input type="text" placeholder="My Awesome Story" className="outline-none bg-transparent text-5xl" />
				<div className="flex gap-2 items-center">
					<label htmlFor="" className="text-sm"> Choose a Category</label>
					<select
						name="category"
						id=""
						className="p-2 rounded-xl bg-white shadow-md"
					>
						<option value="general">General</option>
						<option value="web-design">Web Design</option>
						<option value="development">Development</option>
						<option value="databases">Databases</option>
						<option value="seo">Search Engines</option>
						<option value="marketing">Marketing</option>
					</select>
				</div>
				<textarea className="bg-white rounded-2xl p-4" placeholder="A Short Description"></textarea>
				<ReactQuill theme='snow' className='bg-white shadow-md flex-1 rounded-xl'></ReactQuill>
				<button className="bg-blue-800 text-white font-medium p-2 rounded-xl w-36 mt-4">
					Send
				</button>
			</form>
		</div>
	)
}

export default Write
