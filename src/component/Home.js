import React from 'react'
import { useSelector } from 'react-redux'
import Blogs from './Blogs'

const Home = () => {

    const AllData = useSelector(state => state.blog.items)

    return (
        <>
            {AllData.length === 0 && <h1>There are no Article</h1>}
            {AllData.map((item) =>
                <Blogs
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    des={item.des}
                />
            )}
        </>
    )
}

export default Home