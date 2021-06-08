
const RestaurantMiddleComp = ({restaurant}) => {
    return (
        <div>
            <span>{restaurant.store_name}</span>{":"}
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{restaurant.address}</span>
        </div>
    )
}

export default RestaurantMiddleComp
