import Link from 'next/link'

const AreaSmallComp = ({area}) => {
    return (
        <div>
            <span>{area.areacode_s}</span>{":"}
            <Link href={`/resturantSmall/${area.areacode_s}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{area.areaname_s}</span>
            </Link>
        </div>
    )
}

export default AreaSmallComp
