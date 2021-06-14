import Layout from '../../../components/Layout'
import AreaLargeComp from '../../../components/AreaLarge'
import {useRouter} from 'next/router'
import {getAreaLargeData,getAllAreaLargeIds,getAreaLargeRestaurantData} from '../../../lib/pref'
import StoreListComp from '../../../components/StoreList'



export default function AreaLarge({area_l,area_l_restaurant_list}){
    const router = useRouter()

    if(router.isFallback || !area_l){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_l.areacode_l}>
        <ul className='mt-5'>
            {area_l && area_l.area_l_filtered.map((area) => <AreaLargeComp key={area.areacode_l} area={area} category="restaurant" />)}
        </ul>
        <br />

        <ul className='mt-5'>
        {area_l_restaurant_list.area_l_restaurant_list && area_l_restaurant_list.area_l_restaurant_list.map((restaurant) => <StoreListComp key={restaurant.store_id} store={restaurant} category="restaurant"/>)}
        </ul>
    </Layout>)
}


// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaLargeIds();
    return {
        paths,
        fallback:true,
    }
}

export async function getStaticProps({params}){
    const area_l = await (getAreaLargeData(params.pref));
    const area_l_restaurant_list = await(getAreaLargeRestaurantData(params.pref))
    return {
        props: {
            area_l,
            area_l_restaurant_list
        },
        revalidate:7200,
    }
}
