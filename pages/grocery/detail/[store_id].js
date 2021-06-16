
import Layout from '../../../components/Layout'
import {getAllDetailData,getGroceryDetailData,getAllGroceryDetailIds} from '../../../lib/groceryDetail'
import {useRouter} from 'next/router'


const GroceryDetail = ({grocery}) => {
    return (
        <Layout title={grocery && grocery.grocery.store_name}>
            <div className="mt-8">
                <img src={grocery && grocery.grocery.sub1_img} height={100} width={200}/>
                <p>{grocery.grocery.sub1_head}</p>
                <p>{grocery.grocery.sub1_msg}</p>
                <img src={grocery && grocery.grocery.sub2_img} height={100} width={200}/>
                <p>{grocery.grocery.sub2_head}</p>
                <p>{grocery.grocery.sub2_msg}</p>
                <img src={grocery && grocery.grocery.sub3_img} height={100} width={200}/>  
                <p>{grocery.grocery.sub3_head}</p> 
                <p>{grocery.grocery.sub3_msg}</p>             
            </div>
            <img src={grocery && grocery.grocery.main_img} height={100} />
            <h4>{grocery.grocery.pref.pref_name} &gt; {grocery.grocery.area_large.areaname_l} &gt; {grocery.grocery.area_middle.areaname_m}</h4>


            <table className="table-fixed mt-6 mb-8 border">
                <tbody>
                    <tr>
                        <td className="border">store_name</td>
                        <td className="border">{grocery.grocery.store_name}</td>
                    </tr>
                    <tr>
                        <td className="border">type name</td>
                        <td className="border">{grocery.grocery.type_name}</td>
                    </tr>
                    <tr>
                        <td className="border">mail</td>
                        <td className="border">{grocery.grocery.mail_address}</td>
                    </tr>
                    <tr>
                        <td className="border">own page</td>
                        <td className="border">{grocery.grocery.own_page}</td>
                    </tr>
                    <tr>
                        <td className="border">postal code</td>
                        <td className="border">{grocery.grocery.postal_code}</td>
                    </tr>
                    <tr>
                        <td className="border">tel</td>
                        <td className="border">{grocery.grocery.tel}</td>
                    </tr>
                    <tr>
                        <td className="border">address</td>
                        <td className="border">{grocery.grocery.address}</td>
                    </tr>
                    <tr>
                        <td className="border">access</td>
                        <td className="border">{grocery.grocery.access}</td>
                    </tr>
                    <tr>
                        <td className="border">monday hour</td>
                        <td className="border">{grocery.grocery.monday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">tuesday hour</td>
                        <td className="border">{grocery.grocery.tuesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">wednesday hour</td>
                        <td className="border">{grocery.grocery.wednesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">thursday hour</td>
                        <td className="border">{grocery.grocery.thursday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">friday hour</td>
                        <td className="border">{grocery.grocery.friday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">saturday hour</td>
                        <td className="border">{grocery.grocery.saturday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">sunday hour</td>
                        <td className="border">{grocery.grocery.sunday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">holidays</td>
                        <td className="border">{grocery.grocery.holidays}</td>
                    </tr>
                    <tr>
                        <td className="border">average lunch</td>
                        <td className="border">{grocery.grocery.average_lunch}</td>
                    </tr>
                    <tr>
                        <td className="border">average_dinner</td>
                        <td className="border">{grocery.grocery.average_dinner}</td>
                    </tr>
                    <tr>
                        <td className="border">payments_method</td>
                        <td className="border">{grocery.grocery.payments_method}</td>
                    </tr>
                    <tr>
                        <td className="border">prayer room</td>
                        <td className="border">{grocery.grocery.prayer_room}</td>
                    </tr>
                    <tr>
                        <td className="border">alcohol</td>
                        <td className="border">{grocery.grocery.alcohol}</td>
                    </tr>
                    <tr>
                        <td className="border">pork</td>
                        <td className="border">{grocery.grocery.pork}</td>
                    </tr>
                    <tr>
                        <td className="border">english_menu</td>
                        <td className="border">{grocery.grocery.english_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">muslim menu</td>
                        <td className="border">{grocery.grocery.muslim_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">credit card</td>
                        <td className="border">{grocery.grocery.credit_card}</td>
                    </tr>
                    <tr>
                        <td className="border">electronic payment</td>
                        <td className="border">{grocery.grocery.electronic_payment}</td>
                    </tr>
                    <tr>
                        <td className="border">sum seat</td>
                        <td className="border">{grocery.grocery.sum_seat}</td>
                    </tr>
                    <tr>
                        <td className="border">private room</td>
                        <td className="border">{grocery.grocery.private_room}</td>
                    </tr>
                    <tr>
                        <td className="border">chartered room</td>
                        <td className="border">{grocery.grocery.chartered_room}</td>
                    </tr>
                    <tr>
                        <td className="border">wifi</td>
                        <td className="border">{grocery.grocery.wifi}</td>
                    </tr>
                    <tr>
                        <td className="border">parking</td>
                        <td className="border">{grocery.grocery.parking}</td>
                    </tr>

                    <tr>
                        <td className="border">smoking</td>
                        <td className="border">{grocery.grocery.smoking}</td>
                    </tr>
                    <tr>
                        <td className="border">facebook</td>
                        <td className="border">{grocery.grocery.facebook}</td>
                    </tr>
                    <tr>
                        <td className="border">instagram</td>
                        <td className="border">{grocery.grocery.instagram}</td>
                    </tr>
                    <tr>
                        <td className="border">youtube</td>
                        <td className="border">{grocery.grocery.youtube}</td>
                    </tr>
                    <tr>
                        <td className="border">halal_certification</td>
                        <td className="border">{grocery.grocery.halal_certification}</td>
                    </tr>
                </tbody>
            </table>
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
    const grocery = await getGroceryDetailData(params.store_id);
    return {
        props: {
            grocery
        },
    }
}