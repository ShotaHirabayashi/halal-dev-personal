import Layout from '../../../components/Layout'
import MiddleListComp from '../../../components/MiddleList'
import {useRouter} from 'next/router'
import {getAllAreaMiddleIds,getMosqueMiddleData} from '../../../lib/mosqueMiddle'


export default function RestraurantSmall({mosque_list}){
    const router = useRouter()

    if(router.isFallback || !mosque_list.mosque_list.length){
        return (<Layout><div className='mt-5'>Mosque is not found around this area.</div></Layout>)
    }
    
    return (
    <Layout>
        <h2>Mosuqe list about this area</h2>
        <ul className='mt-5'>
            {mosque_list && mosque_list.mosque_list.map((mosque) => <MiddleListComp key={mosque.store_id} store={mosque} category="mosque"/>)}
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
    const mosque_list = await (getMosqueMiddleData(params.area_m));

    return {
        props: {
            mosque_list
        },
        revalidate:3600,
    }
}