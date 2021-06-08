import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaMiddleIds(){
    const res = await fetch(new URL(`${apiUrl}area/m`));
    const area_m_list = await res.json();
    return area_m_list.map((area_m) => {
        return {
            params : {
                area_m : String(area_m.areacode_m),
            }
        }
    })
}


export async function getMosqueMiddleData(area_m){
    const res = await fetch(new URL(`${apiUrl}mosque/area-m/${area_m}`));
    const mosque_list = await res.json();
    return {
        mosque_list,
    }
}