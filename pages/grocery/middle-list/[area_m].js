import Layout from '../../../components/Layout'
import MiddleListComp from '../../../components/MiddleList'


import {getAllAreaMiddleIds,getGroceryMiddleData} from '../../../lib/groceryMiddle'


export default function RestraurantSmall({grocery_list}){
    if(grocery_list.grocery_list.length===0){
        return (<Layout><div className='mt-5'>Grocery is not found around this area.</div></Layout>)
    }
    
    return (
    <Layout>
        <h2>Grocery list about this area</h2>
        <ul className='mt-5'>
            {grocery_list && grocery_list.grocery_list.map((grocery) => <MiddleListComp key={grocery.store_id} store={grocery} category="grocery"/>)}
        </ul>
    </Layout>)
}

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaMiddleIds();
    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const grocery_list = await (getGroceryMiddleData(params.area_m));

    return {
        props: {
            grocery_list
        }
    }
}