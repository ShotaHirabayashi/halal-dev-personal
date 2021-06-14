import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaMiddleIds(){
    const res = await fetch(new URL(`${apiUrl}area/m`));
    const area_m_list = await res.json();
    return area_m_list.map((area_m) => {
        return {
            params : {
                area_m : String(area_m.areacode_m),
                area_l: String(area_m.areacode_l.areacode_l),
            }
        }
    })
}


export async function getAreaMiddleData(area_l){
    const res = await fetch(new URL(`${apiUrl}area/m`));
    const area_m_list = await res.json();
    const area_m_filtered = area_m_list.filter(area_m => area_m.areacode_l.areacode_l == area_l)
    return {
        area_m_filtered,
    }
}

export async function getAreaMiddleRestaurantData(area_l){
    const res = await fetch(new URL(`${apiUrl}restaurant/area-l/${area_l}`));
    const area_m_restaurant_list = await res.json();
    return {
        area_m_restaurant_list,
    }
}

export async function getAreaMiddleGroceryData(area_l){
    const res = await fetch(new URL(`${apiUrl}grocery/area-l/${area_l}`));
    const area_m_grocery_list = await res.json();
    return {
        area_m_grocery_list,
    }
}


export async function getAreaMiddleMosqueData(area_l){
    const res = await fetch(new URL(`${apiUrl}mosque/area-l/${area_l}`));
    const area_m_mosque_list = await res.json();
    return {
        area_m_mosque_list,
    }
}