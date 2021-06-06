import Link from 'next/link'
import Layout from '../../components/Layout'

import {getAllPostsIds,getPostData} from '../../lib/posts'


export default function Post({post}){
    if(!post){
        return <div>...Loading</div>
    }

    return (<Layout title={post.title}>
        <p>{post.title}</p>
        <br /><br />
        <p>{post.body}</p>
        <Link href="/blog-page">
            <span>back to blog page</span>
        </Link>
    </Layout>)
}



// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllPostsIds();

    return {
        paths,
        // 101番の場合は404
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const {post:post} = await getPostData(params.id);
    return {
        props: {
            post
        }
    }
}