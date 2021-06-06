import Link from 'next/link'
import Layout from '../../components/Layout'
import AreaSmallComp from '../../components/AreaSmall'


import {getAreaSmallData,getAllAreaSmallIds} from '../../lib/areaMiddle'


export default function AreaMiddle({area_s}){
    if(!area_s){
        return <div>...Loading</div>
    }
    
    return (<Layout title={area_s.areacode_s}>
        <ul className='mt-5'>
            {area_s && area_s.area_s_filtered.map((area) => <AreaSmallComp key={area.areacode_s} area={area} />)}
        </ul>
    </Layout>)
}

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllAreaSmallIds();
    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps({params}){
    const area_s = await (getAreaSmallData(params.area_m));
    return {
        props: {
            area_s
        }
    }
}