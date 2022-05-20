import React from 'react'
import "./NavBar.css"
import { useDispatch } from 'react-redux'
import { ChnageAction } from '../store/ChangeSlice'

const NavBar = () => {

    const dispatch = useDispatch()

    const home = () => {
        dispatch(ChnageAction.home())
    }
    
    const createBlog = () => {
        dispatch(ChnageAction.createBlog())
    }

    return (
        <ul>
            <button className='btn' onClick={home}>Home</button>
            <button className='btn' onClick={createBlog}>Create Article</button>
        </ul>
    )
}

export default NavBar