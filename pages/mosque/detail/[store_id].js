import Layout from '../../../components/Layout'
import {getMosqueDetailData,getAllMosqueDetailIds} from '../../../lib/mosqueDetail'


const MosqueDetail = ({mosque}) => {
    return (
        <Layout title={mosque && mosque.mosque.store_name}>
            <div className="mt-8">
                <img src={mosque && mosque.mosque.sub1_img} height={100} width={200}/>
                <p>{mosque.mosque.pref.sub1_head}</p>
                <p>{mosque.mosque.pref.sub1_msg}</p>
                <img src={mosque && mosque.mosque.sub2_img} height={100} width={200}/>
                <p>{mosque.mosque.pref.sub2_head}</p>
                <p>{mosque.mosque.pref.sub2_msg}</p>
                <img src={mosque && mosque.mosque.sub3_img} height={100} width={200}/>  
                <p>{mosque.mosque.pref.sub3_head}</p> 
                <p>{mosque.mosque.pref.sub3_msg}</p>             
            </div>
            <img src={mosque && mosque.mosque.main_img} height={100} />
            <h4>{mosque.mosque.pref.pref_name} &gt; {mosque.mosque.area_large.areaname_l} &gt; {mosque.mosque.area_middle.areaname_m}</h4>
            <table className="table-fixed mt-6 mb-8 border">
                <tbody>
                    <tr>
                        <td className="border">store_name</td>
                        <td className="border">{mosque.mosque.store_name}</td>
                    </tr>
                    <tr>
                        <td className="border">type name</td>
                        <td className="border">{mosque.mosque.type_name}</td>
                    </tr>
                    <tr>
                        <td className="border">mail</td>
                        <td className="border">{mosque.mosque.mail_address}</td>
                    </tr>
                    <tr>
                        <td className="border">own page</td>
                        <td className="border">{mosque.mosque.own_page}</td>
                    </tr>
                    <tr>
                        <td className="border">postal code</td>
                        <td className="border">{mosque.mosque.postal_code}</td>
                    </tr>
                    <tr>
                        <td className="border">tel</td>
                        <td className="border">{mosque.mosque.tel}</td>
                    </tr>
                    <tr>
                        <td className="border">address</td>
                        <td className="border">{mosque.mosque.address}</td>
                    </tr>
                    <tr>
                        <td className="border">access</td>
                        <td className="border">{mosque.mosque.access}</td>
                    </tr>
                    <tr>
                        <td className="border">monday hour</td>
                        <td className="border">{mosque.mosque.monday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">tuesday hour</td>
                        <td className="border">{mosque.mosque.tuesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">wednesday hour</td>
                        <td className="border">{mosque.mosque.wednesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">thursday hour</td>
                        <td className="border">{mosque.mosque.thursday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">friday hour</td>
                        <td className="border">{mosque.mosque.friday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">saturday hour</td>
                        <td className="border">{mosque.mosque.saturday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">sunday hour</td>
                        <td className="border">{mosque.mosque.sunday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">holidays</td>
                        <td className="border">{mosque.mosque.holidays}</td>
                    </tr>
                    <tr>
                        <td className="border">payments_method</td>
                        <td className="border">{mosque.mosque.payments_method}</td>
                    </tr>
                    <tr>
                        <td className="border">prayer room</td>
                        <td className="border">{mosque.mosque.prayer_room}</td>
                    </tr>
                    <tr>
                        <td className="border">alcohol</td>
                        <td className="border">{mosque.mosque.alcohol}</td>
                    </tr>
                    <tr>
                        <td className="border">pork</td>
                        <td className="border">{mosque.mosque.pork}</td>
                    </tr>
                    <tr>
                        <td className="border">english_menu</td>
                        <td className="border">{mosque.mosque.english_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">muslim menu</td>
                        <td className="border">{mosque.mosque.muslim_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">credit card</td>
                        <td className="border">{mosque.mosque.credit_card}</td>
                    </tr>
                    <tr>
                        <td className="border">electronic payment</td>
                        <td className="border">{mosque.mosque.electronic_payment}</td>
                    </tr>
                    <tr>
                        <td className="border">sum seat</td>
                        <td className="border">{mosque.mosque.sum_seat}</td>
                    </tr>
                    <tr>
                        <td className="border">private room</td>
                        <td className="border">{mosque.mosque.private_room}</td>
                    </tr>
                    <tr>
                        <td className="border">chartered room</td>
                        <td className="border">{mosque.mosque.chartered_room}</td>
                    </tr>
                    <tr>
                        <td className="border">wifi</td>
                        <td className="border">{mosque.mosque.wifi}</td>
                    </tr>
                    <tr>
                        <td className="border">parking</td>
                        <td className="border">{mosque.mosque.parking}</td>
                    </tr>
                    <tr>
                        <td className="border">smoking</td>
                        <td className="border">{mosque.mosque.smoking}</td>
                    </tr>
                    <tr>
                        <td className="border">facebook</td>
                        <td className="border">{mosque.mosque.facebook}</td>
                    </tr>
                    <tr>
                        <td className="border">instagram</td>
                        <td className="border">{mosque.mosque.instagram}</td>
                    </tr>
                    <tr>
                        <td className="border">youtube</td>
                        <td className="border">{mosque.mosque.youtube}</td>
                    </tr>
                    <tr>
                        <td className="border">halal_certification</td>
                        <td className="border">{mosque.mosque.halal_certification}</td>
                    </tr>
                </tbody>
            </table>

            
        </Layout>
    )
}

export default MosqueDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllMosqueDetailIds();

    return {
        paths,
        fallback:false,
    }
}


export async function getStaticProps({params}){
    const mosque = await getMosqueDetailData(params.store_id);
    return {
        props: {
            mosque
        },
    }
}