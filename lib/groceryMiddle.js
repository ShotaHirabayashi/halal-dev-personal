import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaMiddleIds(){
    let area_m_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}area/m`));
        area_m_list = await res.json();
    }catch(e){
        area_m_list = {}
    }

    return area_m_list.map((area_m) => {
        return {
            params : {
                area_m : String(area_m.areacode_m),
            }
        }
    })
}


export async function getGroceryMiddleData(area_m){
    let grocery_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}grocery/area-m/${area_m}`));
        grocery_list = await res.json();
    }catch(e){
        grocery_list = {}
    }

    return {
        grocery_list,
    }
}