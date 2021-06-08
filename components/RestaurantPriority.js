import Link from 'next/link'

const RestraurantPriorityComp = ({restaurant}) => {
    return (
        <div>           
                <span>{restaurant.store_name}</span>{":"}
            <Link href={`/restaurantDetail/${restaurant.store_id}`}>
                <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{restaurant.address}</span>
            </Link>
        </div>
    )
}

export default RestraurantPriorityComp
