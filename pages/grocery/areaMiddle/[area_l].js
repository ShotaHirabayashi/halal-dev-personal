import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import AreaMiddleComp from '../../../components/AreaMiddle'
import StoreListComp from '../../../components/StoreList'

import {getAreaMiddleData,getAllAreaMiddleIds,getAreaMiddleGroceryData} from '../../..//lib/areaLarge'


export default function AreaMiddle({area_m,area_m_grocery_list}){
    const router = useRouter()

    if(router.isFallback || !area_m.area_m_filtered.length){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_m.areacode_m}>
        <ul className='mt-5'>
            {area_m && area_m.area_m_filtered.map((area) => <AreaMiddleComp key={area.areacode_m} area={area} category="grocery" />)}
        </ul>

        <ul className='mt-5'>
        {area_m_grocery_list.area_m_grocery_list && area_m_grocery_list.area_m_grocery_list.map((grocery) => <StoreListComp key={grocery.store_id} store={grocery} category="grocery"/>)}
        </ul>
    </Layout>)
}

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaMiddleIds();
    return {
        paths,
        fallback:true,
    }
}

export async function getStaticProps({params}){
    const area_m = await (getAreaMiddleData(params.area_l));
    const area_m_grocery_list = await (getAreaMiddleGroceryData(params.area_l));
    return {
        props: {
            area_m,
            area_m_grocery_list
        },
        revalidate:7200,
    }
}