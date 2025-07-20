import {Link} from 'react-router-dom'
import React from 'react'
import Image from '../components/Image'
import PostMenuActions from '../components/PostMenuActions.tsx'
import Search from '../components/Search.tsx'
import Comments from '../components/comments.tsx'
const SinglePostPage: React.FC = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex gap-8">
				<div className="flex flex-col lg:w-3/5 gap-8">
					<h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem dfi fjdi dhuf sidf eifj sdufe fjdsufuefh sdjfie fudfhsid fjisdjf.</h1>
					<div className="flex gap-2 text-gray-500 text-sm">
						<span>Write by</span>
						<Link to="/" className="text-blue-800">Xianren</Link>
						<span>on</span>
						<Link to="/" className="text-blue-800">Web Design</Link>
						<span>2 days ago</span>
					</div>
					<p className="text-gray-500 font-medium">
						Lorem dfi fjdi dhuf sidf eifj sdufe fjdsufuefh sdjfie fudfhsid fjisdjf.
						Lorem dfi fjdi dhuf sidf eifj sdufe fjdsufuefh sdjfie fudfhsid fjisdjf.
						Lorem dfi fjdi dhuf sidf eifj sdufe fjdsufuefh sdjfie fudfhsid fjisdjf.
						Lorem dfi fjdi dhuf sidf eifj sdufe fjdsufuefh sdjfie fudfhsid fjisdjf.
					</p>
				</div>
				<div className="hidden lg:block w-2/5">
					<Image src="featured1.jpeg" alt="/" className="rounded-2xl object-cover" w={600}></Image>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-12 justify-between lg:text-lg">
				<div className="flex flex-col gap-6 text-justify">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
						fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
						dolorem, dolores eligendi amet perferendis illum repellat nam quam
						facilis veritatis. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
						exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
						Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Libero fuga modi amet error aliquid
						eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
						obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
					</p>
				</div>
				<div className="px-4 h-max sticky top-8">
					<h1 className="mb-4 text-sm font-medium">Author</h1>
						<div className="flex gap-8 items-center">
							<Image src="userImg.jpeg" alt="user" className="rounded-full w-12 h-12" w={48} h={48}></Image>
							<Link to="/" className="text-blue-800">Xianren</Link>
						</div>
						<p className="text-sm text-gray-500 my-5">
							Lorem ipsum dolor sit amet consectetur
						</p>
						<div className="flex gap-2">
							<Link to="/">
								<Image src="facebook.svg" alt="facebook"></Image>
							</Link>
							<Link to="/">
								<Image src="instagram.svg" alt="instagram"></Image>
							</Link>
						</div>
					<PostMenuActions></PostMenuActions>
					<h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
					<div className="flex flex-col gap-2 text-sm">
						<Link className="underline" to="/">All</Link>
						<Link className="underline" to="/">
							Web Design
						</Link>
						<Link className="underline" to="/">
							Development
						</Link>
						<Link className="underline" to="/">
							Databases
						</Link>
						<Link className="underline" to="/">
							Search Engines
						</Link>
						<Link className="underline" to="/">
							Marketing
						</Link>
					</div>
					<h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
					<Search></Search>
				</div>
			</div>
			<Comments></Comments>
		</div>
	)
}

export default SinglePostPage
