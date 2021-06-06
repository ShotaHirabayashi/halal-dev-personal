import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaSmallIds(){
    const res = await fetch(new URL(`${apiUrl}area/s`));
    const area_s_list = await res.json();
    return area_s_list.map((area_s) => {
        return {
            params : {
                area_s : String(area_s.areacode_s),
            }
        }
    })
}


export async function getRestaurantSmallData(area_s){
    const res = await fetch(new URL(`${apiUrl}restaurant/area-s/${area_s}`));
    const restaurant_list = await res.json();
    return {
        restaurant_list,
    }
}