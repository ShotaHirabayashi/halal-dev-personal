import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    const res = await fetch(new URL(`${apiUrl}/restaurant/`));
    const restaurants = await res.json();
    return restaurants
}


export async function getAllRestaurantDetailIds(){
    const res = await fetch(new URL(`${apiUrl}/restaurant/`));
    const restaurants = await res.json();
    return restaurants.map((restaurant) => {
        return {
            params : {
                store_id : String(restaurant.store_id),
            }
        }
    })
}

export async function getRestaurantDetailData(id){
    const res = await fetch(new URL(`${apiUrl}/restaurant/${id}`));
    const restaurant = await res.json();
    return {
        restaurant,
    }
}