import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    let mosques = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/mosque/`));
        mosques = await res.json();
    }catch(e){
        mosques = {}
    }

    return mosques
}



export async function getAllMosqueDetailIds(){
    let mosques = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/mosque/`));
        mosques = await res.json();
    }catch(e){
        mosques = {}
    }

    return mosques.map((mosque) => {
        return {
            params : {
                store_id : String(mosque.store_id),
            }
        }
    })
}

export async function getMosqueDetailData(id){
    let mosque = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/mosque/${id}`));
        mosque = await res.json();
    }catch(e){
        mosque = {}
    }

    return {
        mosque,
    }
}