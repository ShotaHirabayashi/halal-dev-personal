import Link from 'next/link'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import {getAllPostsIds,getPostData} from '../../lib/posts'


export default function Post({post}){

    const router = useRouter()

    if(router.isFallback || !post){
        return <div>...Loading</div>
    }

    return (<Layout title={post.post_title}>
        <h2 className="mb-8 text-xl font-bold">{post.post_title}</h2>
        <img src={post.main_img} height={300} width={700} />
        <p className="px-10 mt-5"><span>written by {post.post_author}</span> | <span>published on {post.post_date}</span></p>
        <p className="px-10 mb-5"><span>{post.blog_tag_id_1}</span>/<span>{post.blog_tag_id_2}</span><span>{post.blog_tag_id_3}</span></p>
        <p className="px-10 container sm">{post.post_content}</p>

        <Link href="/blog-page">
            <span className="mt-4 font-bold">back to blog page</span>
        </Link>
    </Layout>)
}



// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllPostsIds();

    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const {post:post} = await getPostData(params.id);
    return {
        props: {
            post
        },
    }
}