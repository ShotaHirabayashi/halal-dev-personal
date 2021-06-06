import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllPostsData(){
    const res = await fetch(new URL(`${apiUrl}blog/`));
    const posts = await res.json();
    return posts
}

export async function getAllPostsIds(){
    const res = await fetch(new URL(`${apiUrl}/blog/`));
    const posts = await res.json();

    return posts.map((post) => {
        return {
            params : {
                id : String(post.post_id),
            }
        }
    })
}

export async function getPostData(id){
    const res = await fetch(new URL(`${apiUrl}/blog-detail/${id}/`))
    const post = await res.json();
    return {
        post,
    }

}