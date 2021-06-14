import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllTagsData(){
    let tags = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/restaurant/tags/`));
        tags = await res.json();
    }catch(e){
        tags = {}
    }

    return tags
}

