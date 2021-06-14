import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllPrefData(){
    const res = await fetch(new URL(`${apiUrl}/area/p`));
    const prefs = await res.json();
    return prefs
}

export async function getAllAreaLargeIds(){
    const res = await fetch(new URL(`${apiUrl}area/l`));
    const area_l_list = await res.json();
    return area_l_list.map((area_l) => {
        return {
            params : {
                area_l : String(area_l.areacode_l),
                pref: String(area_l.pref_code.pref_code),
            }
        }
    })
}

export async function getAreaLargeData(pref){
    const res = await fetch(new URL(`${apiUrl}area/l`));
    const area_l_list = await res.json();
    const area_l_filtered = area_l_list.filter(area_l => area_l.pref_code.pref_code == pref)
    return {
        area_l_filtered,
    }
}

export async function getAreaLargeRestaurantData(pref){
    const res = await fetch(new URL(`${apiUrl}restaurant/pref/${pref}`));
    const area_l_restaurant_list = await res.json();
    return {
        area_l_restaurant_list,
    }
}


export async function getAreaLargeGroceryData(pref){
    const res = await fetch(new URL(`${apiUrl}grocery/pref/${pref}`));
    const area_l_grocery_list = await res.json();
    return {
        area_l_grocery_list,
    }
}


export async function getAreaLargeMosqueData(pref){
    const res = await fetch(new URL(`${apiUrl}mosque/pref/${pref}`));
    const area_l_mosque_list = await res.json();
    return {
        area_l_mosque_list,
    }
}