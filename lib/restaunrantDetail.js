import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    let restaurants = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/restaurant/`));
        restaurants = await res.json();
    }catch(e){
        restaurants = {}
    }

    return restaurants
}


export async function getAllRestaurantDetailIds(){
    let restaurants = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/restaurant/`));
        restaurants = await res.json();
    }catch(e){
        restaurants = {}
    }

    return restaurants.map((restaurant) => {
        return {
            params : {
                store_id : String(restaurant.store_id),
            }
        }
    })
}

export async function getRestaurantDetailData(id){
    let restaurant = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/restaurant/${id}`));
        restaurant = await res.json();
    }catch(e){
        restaurant = {}
    }

    return {
        restaurant,
    }
}