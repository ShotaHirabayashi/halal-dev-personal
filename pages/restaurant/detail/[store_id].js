import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import {getAllDetailData,getRestaurantDetailData,getAllRestaurantDetailIds} from '../../../lib/restaunrantDetail'


const RestaurantDetail = ({restaurant}) => {
    return (
        <Layout title={restaurant.store_name}>
            <p>{Object.keys(restaurant).length && restaurant.store_name}</p>
            <p>{Object.keys(restaurant).length && restaurant.address}</p>
            <p>{Object.keys(restaurant).length && restaurant.main_msg}</p>
            <img src={Object.keys(restaurant).length && restaurant.main_img} height={100} />
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
    const {restaurant:restaurant} = await getRestaurantDetailData(params.store_id);
    return {
        props: {
            restaurant
        },
        revalidate:7200,
    }
}