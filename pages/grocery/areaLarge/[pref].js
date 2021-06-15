import Layout from '../../../components/Layout'
import {useRouter} from 'next/router'
import AreaLargeComp from '../../../components/AreaLarge'
import {getAreaLargeData,getAllAreaLargeIds,getAreaLargeGroceryData} from '../../../lib/pref'
import StoreListComp from '../../../components/StoreList'


export default function AreaLarge({area_l,area_l_grocery_list}){

    const router = useRouter()
    if(router.isFallback || !area_l){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_l.areacode_l}>
        <div className='mt-5 mb-10'>
        <ul className='mt-5'>
            {area_l && area_l.area_l_filtered.map((area) => <AreaLargeComp key={area.areacode_l} area={area} category="grocery" />)}
        </ul>

        <ul className='mt-5'>
            {area_l_grocery_list.area_l_grocery_list && area_l_grocery_list.area_l_grocery_list.map((grocery) => <StoreListComp key={grocery.store_id} store={grocery} category="grocery"/>)}
        </ul>
        </div>
    </Layout>)
}


// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaLargeIds();
    return {
        paths,
        fallback:false,
    }
}


export async function getStaticProps({params}){
    const area_l = await (getAreaLargeData(params.pref));
    const area_l_grocery_list = await(getAreaLargeGroceryData(params.pref))
    return {
        props: {
            area_l,
            area_l_grocery_list
        },
    }
}