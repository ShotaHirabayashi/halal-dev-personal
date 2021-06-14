
import Layout from '../../../components/Layout'
import {getAllDetailData,getGroceryDetailData,getAllGroceryDetailIds} from '../../../lib/groceryDetail'
import {useRouter} from 'next/router'


const GroceryDetail = ({grocery}) => {
    return (
        <Layout title={grocery.grocery && grocery.grocery.store_name}>
            <p>{grocery.grocery && grocery.grocery.store_name}</p>
            <p>{grocery.grocery && grocery.grocery.address}</p>
            <p>{grocery.grocery && grocery.grocery.main_msg}</p>
            <img src={grocery.grocery && grocery.grocery.main_img} height={100} />
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
    const grocery = await getGroceryDetailData(params.store_id);
    return {
        props: {
            grocery
        },
        revalidate:7200,
    }
}