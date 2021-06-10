
import Layout from '../../../components/Layout'
import {getAllDetailData,getGroceryDetailData,getAllGroceryDetailIds} from '../../../lib/groceryDetail'
import {useRouter} from 'next/router'


const GroceryDetail = ({grocery}) => {
    return (
        <Layout title={grocery.store_name}>
            <p>{grocery.store_name}</p>
            <p>{grocery.address}</p>
            <p>{grocery.main_msg}</p>
            <img src={grocery.main_img} height={100} />
        </Layout>
    )
}

export default GroceryDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllGroceryDetailIds();

    return {
        paths,
        fallback:false,
    }
}


export async function getStaticProps({params}){
    const {grocery:grocery} = await getGroceryDetailData(params.store_id);
    return {
        props: {
            grocery
        },
    }
}