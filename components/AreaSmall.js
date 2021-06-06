
const AreaSmallComp = ({area}) => {
    return (
        <div>
            <span>{area.areacode_s}</span>{":"}
            <span className="cursor-pointer text-blue-500 hover:bg-gray-500">{area.areaname_s}</span>
        </div>
    )
}

export default AreaSmallComp
