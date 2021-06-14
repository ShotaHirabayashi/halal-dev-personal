import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import {getAllDetailData,getRestaurantDetailData,getAllRestaurantDetailIds} from '../../../lib/restaunrantDetail'


const RestaurantDetail = ({restaurant}) => {
    return (
        <Layout title={restaurant.restaurant && restaurant.restaurant.store_name}>
            <p>{restaurant.restaurant && restaurant.restaurant.store_name}</p>
            <p>{restaurant.restaurant && restaurant.restaurant.address}</p>
            <p>{restaurant.restaurant && restaurant.restaurant.main_msg}</p>
            <img src={restaurant.restaurant && restaurant.restaurant.main_img} height={100} />
        </Layout>
    )
}

export default RestaurantDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllRestaurantDetailIds();

    return {
        paths,
        fallback:true,
    }
}


export async function getStaticProps({params}){
    const restaurant = await getRestaurantDetailData(params.store_id);
    return {
        props: {
            restaurant
        },
        revalidate:7200,
    }
}