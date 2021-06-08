import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllPriorityData(){
    const res = await fetch(new URL(`${apiUrl}/restaurant/priority/`));
    const restaurants = await res.json();
    return restaurants
}

