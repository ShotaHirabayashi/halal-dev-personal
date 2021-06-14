
import Layout from '../../../components/Layout'
import {getAllDetailData,getGroceryDetailData,getAllGroceryDetailIds} from '../../../lib/groceryDetail'
import {useRouter} from 'next/router'


const GroceryDetail = ({grocery}) => {
    return (
        <Layout title={grocery.store_name}>
            <p>{Object.keys(grocery).length && grocery.store_name}</p>
            <p>{Object.keys(grocery).length && grocery.address}</p>
            <p>{Object.keys(grocery).length && grocery.main_msg}</p>
            <img src={Object.keys(grocery).length && grocery.main_img} height={100} />
        </Layout>
    )
}

export default GroceryDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllGroceryDetailIds();

    return {
        paths,
        fallback:true,
    }
}


export async function getStaticProps({params}){
    const {grocery:grocery} = await getGroceryDetailData(params.store_id);
    return {
        props: {
            grocery
        },
        revalidate:7200,
    }
}