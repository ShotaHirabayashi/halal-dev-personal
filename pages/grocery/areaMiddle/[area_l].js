import Link from 'next/link'
import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import AreaMiddleComp from '../../../components/AreaMiddle'

import {getAreaMiddleData,getAllAreaMiddleIds} from '../../..//lib/areaLarge'


export default function AreaMiddle({area_m}){
    const router = useRouter()

    if(router.isFallback || !area_m.area_m_filtered.length){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_m.areacode_m}>
        <ul className='mt-5'>
            {area_m && area_m.area_m_filtered.map((area) => <AreaMiddleComp key={area.areacode_m} area={area} category="grocery" />)}
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
    return {
        props: {
            area_m
        }
    }
}