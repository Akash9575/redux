import React from 'react'
import { BlogAction } from '../store/BlogSlice'
import { useDispatch } from 'react-redux'
import "./Blog.css"

const Blogs = (props) => {

    const dispatch = useDispatch();

    const HandleDelete = () => {
        dispatch(BlogAction.removeItem(props.id))
    }

    return (
        <div className='blog'>
            <label className='title'>{props.title}</label>
            <textarea disabled className='des' defaultValue={props.des} />
            <button onClick={HandleDelete}>Delete</button>
        </div>
    )
}

export default Blogs