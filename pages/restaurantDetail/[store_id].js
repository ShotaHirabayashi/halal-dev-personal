
import Layout from '../../components/Layout'
import {getAllDetailData,getRestaurantDetailData,getAllRestaurantDetailIds} from '../../lib/restaunrantDetail'


const RestaurantDetail = ({restaurant}) => {
    return (
        <Layout title={restaurant.store_name}>
            <p>{restaurant.store_name}</p>
            <p>{restaurant.pref.pref_name}</p>
            <p>{restaurant.area_middle.areaname_m}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.ss}</p>
            <p>{restaurant.main_msg}</p>
            <img src={restaurant.main_img} height={100} />
        </Layout>
    )
}

export default RestaurantDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllRestaurantDetailIds();

    return {
        paths,
        // 101番の場合は404
        fallback:false,
    }
}


export async function getStaticProps({params}){
    const {restaurant:restaurant} = await getRestaurantDetailData(params.store_id);
    return {
        props: {
            restaurant
        }
    }
}