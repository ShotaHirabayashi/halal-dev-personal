import Link from 'next/link'

const PrefComp = ({pref,category}) => {
    return (
        <div>
            <span>{pref.pref_code}</span>{":"}
            <Link href={`/${category}/areaLarge/${pref.pref_code}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{pref.pref_name}</span>
            </Link>
        </div>
    )
}

export default PrefComp
