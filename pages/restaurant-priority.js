
import Layout from '../components/Layout'
import {getAllPriorityData} from '../lib/restaurantPriority'
import RestraurantPriorityComp from '../components/RestaurantPriority'


const RestaurantPriority = ({restaurants}) => {
    return (
        <Layout title="tags">
            <h3>Restaurant Priority(上位20件)</h3>
            <ul className='mt-5'>
                {restaurants && restaurants.map((restaurant) => <RestraurantPriorityComp key={restaurant.store_id} restaurant={restaurant} />)}
            </ul>
        </Layout>
    )
}

export default RestaurantPriority

export async function getStaticProps(){
    const restaurants = await getAllPriorityData()
    return {
        props: {restaurants}
    }
}