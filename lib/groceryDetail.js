import fetch from 'node-fetch'

const apiUrl = 'https://www.halalfoodinjapan.com/api/';


export async function getAllDetailData(){
    let groceries = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/grocery/`));
        groceries = await res.json();
    }catch(e){
        groceries = {}
    }

    return groceries
}



export async function getAllGroceryDetailIds(){
    let  groceries = {}
    try{
        const res = await fetch(new URL(`${apiUrl}/grocery/`));
        groceries = await res.json();
    }catch(e){
        groceries =  {store_name:"",address:"",main_msg:"",main_img:""}
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