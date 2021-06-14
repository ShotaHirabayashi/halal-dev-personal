import Layout from '../../../components/Layout'
import AreaMiddleComp from '../../../components/AreaMiddle'
import {useRouter} from 'next/router'
import {getAreaMiddleData,getAllAreaMiddleIds,getAreaMiddleRestaurantData} from '../../../lib/areaLarge'
import StoreListComp from '../../../components/StoreList'


export default function AreaMiddle({area_m,area_m_restaurant_list}){

    const router = useRouter()

    if(router.isFallback || !area_m.area_m_filtered.length){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_m.areacode_m}>
        <ul className='mt-5'>
            {area_m && area_m.area_m_filtered.map((area) => <AreaMiddleComp key={area.areacode_m} area={area} category="restaurant"/>)}
        </ul>

        <ul className='mt-5'>
        {area_m_restaurant_list && area_m_restaurant_list.area_m_restaurant_list.map((restaurant) => <StoreListComp key={restaurant.store_id} store={restaurant} category="restaurant"/>)}
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
    const area_m = await (getAreaMiddleData(params.area_l));
    const area_m_restaurant_list = await (getAreaMiddleRestaurantData(params.area_l));
    return {
        props: {
            area_m,
            area_m_restaurant_list
        }
    }
}
