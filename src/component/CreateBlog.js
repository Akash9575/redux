import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BlogAction } from '../store/BlogSlice'
import { ChnageAction } from '../store/ChangeSlice'
import "./CreateBlog.css"


const CreateBlog = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const [data, setData] = useState({
        id: '',
        title: '',
        des: ''
    })

    const HandleChange = (e) => {
        setData((oldvalue) => {
            return { ...oldvalue, [e.target.name]: e.target.value }
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (data.title.length < 5) {
            setError("Title Must be more than 5 character")
            return;
        } else if (data.des.length < 20) {
            setError("Discription Must be more than 20 character")
            return;
        }

        dispatch(BlogAction.addItem(data))
        setError('')

        setData({
            id: '',
            title: '',
            des: ''
        })
        dispatch(ChnageAction.home())
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={HandleSubmit}>
                {error && <label className='error'>{error}</label>}
                <label>Title</label>
                <input type="text" name="title" value={data.title} onChange={HandleChange} />
                <label>Description</label>
                <textarea type="text" name="des" value={data.des} onChange={HandleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateBlog