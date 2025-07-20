import React from 'react'
import Image from '../components/Image'
import {Link} from 'react-router-dom'

const PostListItem:React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {/*封面*/}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="featured1.jpeg" className="rounded-2xl object-cover" alt="/" w={735}></Image>
            </div>
            {/*详情*/}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/" className="text-4xl font-semibold">Lorem sidf df dif sdif sdf i. djifjds dfime  fid dfjie sdf idfj eifigie sidf ejid </Link>
                <div className="flex gap-2 text-gray-500 text-sm">
                    <span>Write by</span>
                    <Link to="/" className="text-blue-800">Xianren</Link>
                    <span>on</span>
                    <Link to="/" className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>Lorem sidf df dif sdif sdf i. djifjds dfime  fid dfjie sdf idfj eifigie sidf ejid Lorem sidf df dif sdif sdf i. djifjds dfime  fid dfjie sdf idfj eifigie sidf ejid Lorem sidf df dif sdif sdf i. djifjds dfime  fid dfjie sdf idfj eifigie sidf ejid</p>
                <Link to="/test" className="text-blue-800 text-sm">Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem