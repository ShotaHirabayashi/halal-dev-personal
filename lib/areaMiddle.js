import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllAreaSmallIds(){
    const res = await fetch(new URL(`${apiUrl}area/s`));
    const area_s_list = await res.json();
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
    const res = await fetch(new URL(`${apiUrl}area/s`));
    const area_s_list = await res.json();
    const area_s_filtered = area_s_list.filter(area_s => area_s.areacode_m.areacode_m == area_m)
    return {
        area_s_filtered,
    }
}