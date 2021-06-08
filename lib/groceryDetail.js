import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    const res = await fetch(new URL(`${apiUrl}/grocery/`));
    const groceries = await res.json();
    return groceries
}



export async function getAllGroceryDetailIds(){
    const res = await fetch(new URL(`${apiUrl}/grocery/`));
    const groceries = await res.json();
    return groceries.map((grocery) => {
        return {
            params : {
                store_id : String(grocery.store_id),
            }
        }
    })
}

export async function getGroceryDetailData(id){
    const res = await fetch(new URL(`${apiUrl}/grocery/${id}`));
    const grocery = await res.json();
    return {
        grocery,
    }
}