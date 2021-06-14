import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    try{
        const res = await fetch(new URL(`${apiUrl}/grocery/`));
        const groceries = await res.json();
    }catch(e){
        const groceries = {}
    }

    return groceries
}



export async function getAllGroceryDetailIds(){
    try{
        const res = await fetch(new URL(`${apiUrl}/grocery/`));
        const groceries = await res.json();
    }catch(e){
        const groceries =  {}
    }

    return groceries.map((grocery) => {
        return {
            params : {
                store_id : String(grocery.store_id),
            }
        }
    })
}

export async function getGroceryDetailData(id){
    let grocery = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/grocery/${id}`));
        grocery = await res.json();
    }catch(e){
        grocery = {}
    }

    return {
        grocery,
    }
}