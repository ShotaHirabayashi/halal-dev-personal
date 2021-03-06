import Layout from '../../../components/Layout'
import StoreListComp from '../../../components/StoreList'
import {useRouter} from 'next/router'


import {getAllAreaMiddleIds,getGroceryMiddleData} from '../../../lib/groceryMiddle'


export default function RestraurantSmall({grocery_list}){

    const router = useRouter()
    if(router.isFallback || !grocery_list.grocery_list.length){
        return (<Layout><div className='mt-5'>Grocery is not found around this area.</div></Layout>)
    }
    
    return (
    <Layout>
        <h2>Grocery list about this area</h2>
        <ul className='mt-5'>
            {grocery_list && grocery_list.grocery_list.map((grocery) => <StoreListComp key={grocery.store_id} store={grocery} category="grocery"/>)}
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
        },
    }
}