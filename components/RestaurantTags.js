import Link from 'next/link'

const TagsComp = ({tag}) => {
    return (
        <div>
            <span>{tag.name}</span>{":"}
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{tag.slug}</span>
        </div>
    )
}

export default TagsComp
