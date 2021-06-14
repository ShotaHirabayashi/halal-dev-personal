import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllPriorityData(){
    let restaurants = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/restaurant/priority/`));
        restaurants = await res.json();
    }catch(e){
        restaurants = {}
    }

    return restaurants
}

