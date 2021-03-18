import ListItem from './ListItem'

const IconList = ({ header, list }) => {
    return (
        <div className='list-content'>
            <h1 className='txt'>{header}</h1><br />
            {list.map((item) => (
                <ListItem item={item} />
            ))}
        </div>
    )
}

export default IconList
