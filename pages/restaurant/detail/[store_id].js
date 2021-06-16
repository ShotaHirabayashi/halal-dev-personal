import {useRouter} from 'next/router'
import Layout from '../../../components/Layout'
import {getAllDetailData,getRestaurantDetailData,getAllRestaurantDetailIds} from '../../../lib/restaunrantDetail'


const RestaurantDetail = ({restaurant}) => {
    return (
        <Layout title={restaurant && restaurant.restaurant.store_name}>
            <div className="mt-8">
                <img src={restaurant && restaurant.restaurant.sub1_img} height={100} width={200}/>
                <p>{restaurant.restaurant.sub1_head}</p>
                <p>{restaurant.restaurant.sub1_msg}</p>
                <img src={restaurant && restaurant.restaurant.sub2_img} height={100} width={200}/>
                <p>{restaurant.restaurant.sub2_head}</p>
                <p>{restaurant.restaurant.sub2_msg}</p>
                <img src={restaurant && restaurant.restaurant.sub3_img} height={100} width={200}/>  
                <p>{restaurant.restaurant.sub3_head}</p> 
                <p>{restaurant.restaurant.sub3_msg}</p>             
            </div>
            <img src={restaurant && restaurant.restaurant.main_img} height={100} width={400}/>
            <h4>{restaurant.restaurant.pref &&　restaurant.restaurant.pref.pref_name} &gt; {restaurant.restaurant.area_large &&　restaurant.restaurant.area_large.areaname_l} &gt; {restaurant.restaurant.area_middle &&　restaurant.restaurant.area_middle.areaname_m}</h4>

            <table className="table-fixed mt-6 mb-8 border">
                <tbody>
                    <tr>
                        <td className="border">store_name</td>
                        <td className="border">{restaurant.restaurant.store_name}</td>
                    </tr>
                    <tr>
                        <td className="border">type name</td>
                        <td className="border">{restaurant.restaurant.type_name}</td>
                    </tr>
                    <tr>
                        <td className="border">mail</td>
                        <td className="border">{restaurant.restaurant.mail_address}</td>
                    </tr>
                    <tr>
                        <td className="border">own page</td>
                        <td className="border">{restaurant.restaurant.own_page}</td>
                    </tr>
                    <tr>
                        <td className="border">postal code</td>
                        <td className="border">{restaurant.restaurant.postal_code}</td>
                    </tr>
                    <tr>
                        <td className="border">tel</td>
                        <td className="border">{restaurant.restaurant.tel}</td>
                    </tr>
                    <tr>
                        <td className="border">address</td>
                        <td className="border">{restaurant.restaurant.address}</td>
                    </tr>
                    <tr>
                        <td className="border">access</td>
                        <td className="border">{restaurant.restaurant.access}</td>
                    </tr>
                    <tr>
                        <td className="border">monday hour</td>
                        <td className="border">{restaurant.restaurant.monday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">tuesday hour</td>
                        <td className="border">{restaurant.restaurant.tuesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">wednesday hour</td>
                        <td className="border">{restaurant.restaurant.wednesday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">thursday hour</td>
                        <td className="border">{restaurant.restaurant.thursday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">friday hour</td>
                        <td className="border">{restaurant.restaurant.friday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">saturday hour</td>
                        <td className="border">{restaurant.restaurant.saturday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">sunday hour</td>
                        <td className="border">{restaurant.restaurant.sunday_hour}</td>
                    </tr>
                    <tr>
                        <td className="border">holidays</td>
                        <td className="border">{restaurant.restaurant.holidays}</td>
                    </tr>
                    <tr>
                        <td className="border">average lunch</td>
                        <td className="border">{restaurant.restaurant.average_lunch}</td>
                    </tr>
                    <tr>
                        <td className="border">average_dinner</td>
                        <td className="border">{restaurant.restaurant.average_dinner}</td>
                    </tr>
                    <tr>
                        <td className="border">payments_method</td>
                        <td className="border">{restaurant.restaurant.payments_method}</td>
                    </tr>
                    <tr>
                        <td className="border">prayer room</td>
                        <td className="border">{restaurant.restaurant.prayer_room}</td>
                    </tr>
                    <tr>
                        <td className="border">alcohol</td>
                        <td className="border">{restaurant.restaurant.alcohol}</td>
                    </tr>
                    <tr>
                        <td className="border">pork</td>
                        <td className="border">{restaurant.restaurant.pork}</td>
                    </tr>
                    <tr>
                        <td className="border">english_menu</td>
                        <td className="border">{restaurant.restaurant.english_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">muslim menu</td>
                        <td className="border">{restaurant.restaurant.muslim_menu}</td>
                    </tr>
                    <tr>
                        <td className="border">credit card</td>
                        <td className="border">{restaurant.restaurant.credit_card}</td>
                    </tr>
                    <tr>
                        <td className="border">electronic payment</td>
                        <td className="border">{restaurant.restaurant.electronic_payment}</td>
                    </tr>
                    <tr>
                        <td className="border">sum seat</td>
                        <td className="border">{restaurant.restaurant.sum_seat}</td>
                    </tr>
                    <tr>
                        <td className="border">private room</td>
                        <td className="border">{restaurant.restaurant.private_room}</td>
                    </tr>
                    <tr>
                        <td className="border">chartered room</td>
                        <td className="border">{restaurant.restaurant.chartered_room}</td>
                    </tr>
                    <tr>
                        <td className="border">wifi</td>
                        <td className="border">{restaurant.restaurant.wifi}</td>
                    </tr>
                    <tr>
                        <td className="border">parking</td>
                        <td className="border">{restaurant.restaurant.parking}</td>
                    </tr>

                    <tr>
                        <td className="border">smoking</td>
                        <td className="border">{restaurant.restaurant.smoking}</td>
                    </tr>
                    <tr>
                        <td className="border">facebook</td>
                        <td className="border">{restaurant.restaurant.facebook}</td>
                    </tr>
                    <tr>
                        <td className="border">instagram</td>
                        <td className="border">{restaurant.restaurant.instagram}</td>
                    </tr>
                    <tr>
                        <td className="border">youtube</td>
                        <td className="border">{restaurant.restaurant.youtube}</td>
                    </tr>
                    <tr>
                        <td className="border">halal_certification</td>
                        <td className="border">{restaurant.restaurant.halal_certification}</td>
                    </tr>
                </tbody>
            </table>

        </Layout>
    )
}

export default RestaurantDetail

// ビルド時に取得
export async function getStaticPaths(){
    const paths = await getAllRestaurantDetailIds();

    return {
        paths,
        fallback:false,
    }
}


export async function getStaticProps({params}){
    const restaurant = await getRestaurantDetailData(params.store_id);
    return {
        props: {
            restaurant
        },
    }
}