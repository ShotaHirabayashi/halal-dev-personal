import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaSmallIds(){
    let area_s_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}area/s`));
        area_s_list = await res.json();
    }catch(e){
        area_s_list = {}
    }

    return area_s_list.map((area_s) => {
        return {
            params : {
                area_s : String(area_s.areacode_s),
                area_m: String(area_s.areacode_m.areacode_m),
            }
        }
    })
}


export async function getAreaSmallData(area_m){
    let area_s_list = {}
    try{
        const res = await fetch(new URL(`${apiUrl}area/s`));
        area_s_list = await res.json();
    }catch(e){
        area_s_list = {}
    }
    let area_s_filtered = area_s_list.filter(area_s => area_s.areacode_m.areacode_m == area_m)
    return {
        area_s_filtered,
    }
}