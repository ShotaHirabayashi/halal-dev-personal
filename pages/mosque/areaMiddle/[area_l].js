import Link from 'next/link'
import Layout from '../../../components/Layout'
import AreaMiddleComp from '../../../components/AreaMiddle'
import {useRouter} from 'next/router'
import {getAreaMiddleData,getAllAreaMiddleIds,getAreaMiddleMosqueData} from '../../..//lib/areaLarge'
import StoreListComp from '../../../components/StoreList'


export default function AreaMiddle({area_m,area_m_mosque_list}){
    const router = useRouter()

    if(router.isFallback || !area_m.area_m_filtered.length){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_m.areacode_m}>
        <ul className='mt-5'>
            {area_m && area_m.area_m_filtered.map((area) => <AreaMiddleComp key={area.areacode_m} area={area} category="mosque" />)}
        </ul>

        <ul className='mt-5'>
        {area_m_mosque_list.area_m_mosque_list && area_m_mosque_list.area_m_mosque_list.map((mosque) => <StoreListComp key={mosque.store_id} store={mosque} category="mosque"/>)}
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
    const area_m_mosque_list = await (getAreaMiddleMosqueData(params.area_l));
    return {
        props: {
            area_m,
            area_m_mosque_list
        },
    }
}
