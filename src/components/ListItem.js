import React from 'react'

const ListItem = ({ item }) => {
    return (
        <div className='list-item'>
            <img className='list-icon' src={item.icon} alt='icon' />
            <p className='txt'>{item.text}</p><br />
        </div>
    )
}

export default ListItem
