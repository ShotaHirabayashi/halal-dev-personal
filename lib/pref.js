import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllPrefData(){
    let prefs ={}
    try{
        const res = await fetch(new URL(`${apiUrl}/area/p`));
        prefs = await res.json();
    }catch(e){
        prefs = {}
    }
    return prefs
}

export async function getAllAreaLargeIds(){
    let area_l_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}area/l`));
        area_l_list = await res.json();
    }catch(e){
        area_l_list = {}
    }

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
    let area_l_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}area/l`));
        area_l_list = await res.json();
    }catch(e){
        area_l_list = {}
    }

    const area_l_filtered = area_l_list.filter(area_l => area_l.pref_code.pref_code == pref)
    return {
        area_l_filtered,
    }
}

export async function getAreaLargeRestaurantData(pref){
    let area_l_restaurant_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}restaurant/pref/${pref}`));
        area_l_restaurant_list = await res.json();
    }catch(e){
        area_l_restaurant_list = {}
    }

    return {
        area_l_restaurant_list,
    }
}


export async function getAreaLargeGroceryData(pref){
    let area_l_grocery_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}grocery/pref/${pref}`));
        area_l_grocery_list = await res.json();
    }catch(e){
        area_l_grocery_list = {}
    }

    return {
        area_l_grocery_list,
    }
}


export async function getAreaLargeMosqueData(pref){
    let area_l_mosque_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}mosque/pref/${pref}`));
        area_l_mosque_list = await res.json();
    }catch(e){
        area_l_mosque_list = {}
    }

    return {
        area_l_mosque_list,
    }
}