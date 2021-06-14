import Link from 'next/link'


const StoreListComp = ({store,category}) => {
    return (
        <div>
            <span>{store.store_name && store.store_name}</span>{":"}
            <Link href={`/${category}/detail/${store.store_id}`}>
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{store.address && store.address}</span>
            </Link>
        </div>
    )
}

export default StoreListComp
