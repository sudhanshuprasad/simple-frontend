import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = (props) => {
    const param = useParams();
    return (
        <div>Blog for {param.id} </div>
    )
}

export default Blog