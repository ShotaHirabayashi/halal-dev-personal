
import Layout from '../components/Layout'
import {getAllPostsData} from '../lib/posts'
import Post from '../components/Post'


const Blog = ({posts}) => {
    return (
        <Layout title="blog">
            <ul className="mt-8 mb-7">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export default Blog


export async function getStaticProps(){
    const posts = await getAllPostsData()
    return {
        props: {
            posts
        },
        revalidate:7200,
    }
}