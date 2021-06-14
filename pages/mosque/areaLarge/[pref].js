import Layout from '../../../components/Layout'
import AreaLargeComp from '../../../components/AreaLarge'
import {useRouter} from 'next/router'
import {getAreaLargeData,getAllAreaLargeIds,getAreaLargeMosqueData} from '../../../lib/pref'
import StoreListComp from '../../../components/StoreList'


export default function AreaLarge({area_l,area_l_mosque_list}){
    const router = useRouter()


    if(router.isFallback || !area_l){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_l.areacode_l}>
        <ul className='mt-5'>
            {area_l && area_l.area_l_filtered.map((area) => <AreaLargeComp key={area.areacode_l} area={area} category="mosque" />)}
        </ul>

        <ul className='mt-5'>
        {area_l_mosque_list && area_l_mosque_list.area_l_mosque_list.map((mosque) => <StoreListComp key={mosque.store_id} store={mosque} category="mosque"/>)}
        </ul>
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
    const area_l_mosque_list = await(getAreaLargeMosqueData(params.pref))
    return {
        props: {
            area_l,
            area_l_mosque_list
        }
    }
}