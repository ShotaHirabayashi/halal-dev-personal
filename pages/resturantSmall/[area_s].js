import Layout from '../../components/Layout'
import RestaurantSmallComp from '../../components/RestaurantSmall'


import {getRestaurantSmallData,getAllAreaSmallIds} from '../../lib/restaurantSmall'


export default function RestraurantSmall({restaurant_list}){
    if(restaurant_list.restaurant_list.length===0){
        return (<Layout><div className='mt-5'>Restaurant is not found around this area</div></Layout>)
    }
    
    return (
    <Layout>
        <h2>Restraurant list about this area</h2>
        <ul className='mt-5'>
            {restaurant_list && restaurant_list.restaurant_list.map((restaurant) => <RestaurantSmallComp key={restaurant.store_id} restaurant={restaurant} />)}
        </ul>
    </Layout>)
}

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaSmallIds();
    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const restaurant_list = await (getRestaurantSmallData(params.area_s));

    return {
        props: {
            restaurant_list
        }
    }
}