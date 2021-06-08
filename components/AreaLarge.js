import Link from 'next/link'

const AreaLargeComp = ({area}) => {
    return (
        <div>
            <span>{area.areacode_l}</span>{":"}
            <Link href={`/areaMiddle/${area.areacode_l}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{area.areaname_l}</span>
            </Link>
        </div>
    )
}

export default AreaLargeComp
