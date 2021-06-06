import Link from 'next/link'

const AreaMiddleComp = ({area}) => {
    return (
        <div>
            <span>{area.areacode_m}</span>{":"}
            <Link href={`/areaMiddle/${area.areacode_m}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{area.areaname_m}</span>
            </Link>
        </div>
    )
}

export default AreaMiddleComp
