import Link from 'next/link'

const Post = ({post}) => {
    return (
        <div>
            <span>{post.post_id}</span>{":"}
            <Link href={`/posts/${post.post_id}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{post.post_title}</span>
            </Link>
        </div>
    )
}

export default Post
