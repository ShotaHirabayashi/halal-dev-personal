import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


// export async function getAllAreaLargeData(){
//     const res = await fetch(new URL(`${apiUrl}/area/p`));
//     const prefs = await res.json();
//     return prefs
// }


export async function getAllAreaMiddleIds(){
    const res = await fetch(new URL(`${apiUrl}area/m`));
    const area_m_list = await res.json();
    // const area_m_list = JSON.stringify(res.data)
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