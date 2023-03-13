import React from 'react'
import Tags from './Tags'
import  tag  from './tag'

export default function TagsAll() {
    return (
        <div>
            <div className='brands-tag'>
           {
            tag.map(item => <Tags key={item.id} item={item} />)
           }
            </div>
           

        </div>
    )
}
