import Link from 'next/link'

const PrefComp = ({pref}) => {
    return (
        <div>
            <span>{pref.pref_code}</span>{":"}
            <Link href={`/pref/${pref.pref_code}`} >
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{pref.pref_name}</span>
            </Link>
        </div>
    )
}

export default PrefComp
