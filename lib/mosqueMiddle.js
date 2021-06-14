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


export async function getMosqueMiddleData(area_m){
    let mosque_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}mosque/area-m/${area_m}`));
        mosque_list = await res.json();
    }catch(e){
        mosque_list = {}
    }

    return {
        mosque_list,
    }
}