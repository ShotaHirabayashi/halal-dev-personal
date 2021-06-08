import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    const res = await fetch(new URL(`${apiUrl}/mosque/`));
    const mosques = await res.json();
    return mosques
}



export async function getAllMosqueDetailIds(){
    const res = await fetch(new URL(`${apiUrl}/mosque/`));
    const mosques = await res.json();
    return mosques.map((mosque) => {
        return {
            params : {
                store_id : String(mosque.store_id),
            }
        }
    })
}

export async function getMosqueDetailData(id){
    const res = await fetch(new URL(`${apiUrl}/mosque/${id}`));
    const mosque = await res.json();
    return {
        mosque,
    }
}