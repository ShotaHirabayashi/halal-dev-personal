import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllTagsData(){
    const res = await fetch(new URL(`${apiUrl}/restaurant/tags/`));
    const tags = await res.json();
    return tags
}

