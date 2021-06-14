import Layout from '../../../components/Layout'
import {getMosqueDetailData,getAllMosqueDetailIds} from '../../../lib/mosqueDetail'


const MosqueDetail = ({mosque}) => {
    return (
        <Layout title={mosque.mosque && mosque.mosque.store_name}>
            <p>{mosque.mosque && mosque.mosque.store_name}</p>
            <p>{mosque.mosque && mosque.mosque.address}</p>
            <p>{mosque.mosque && mosque.mosque.main_msg}</p>
            <img src={mosque.mosque && mosque.mosque.main_img} height={100} />
        </Layout>
    )
}

export default MosqueDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllMosqueDetailIds();

    return {
        paths,
        fallback:true,
    }
}


export async function getStaticProps({params}){
    const mosque = await getMosqueDetailData(params.store_id);
    return {
        props: {
            mosque
        },
        revalidate:7200,
    }
}