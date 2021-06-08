import Layout from '../../../components/Layout'
import MiddleListComp from '../../../components/MiddleList'


import {getAllAreaMiddleIds,getRestaurantMiddleData} from '../../../lib/restaurantMiddle'


export default function RestraurantSmall({restaurant_list}){
    if(restaurant_list.restaurant_list.length===0){
        return (<Layout><div className='mt-5'>Restaurant is not found around this area.</div></Layout>)
    }
    
    return (
    <Layout>
        <h2>Restraurant list about this area</h2>
        <ul className='mt-5'>
            {restaurant_list && restaurant_list.restaurant_list.map((restaurant) => <MiddleListComp key={restaurant.store_id} store={restaurant} category="restaurant"/>)}
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
    const restaurant_list = await (getRestaurantMiddleData(params.area_m));

    return {
        props: {
            restaurant_list
        }
    }
}