import React from 'react';
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Navigation from '../components/Navigation';
import { saveAvatar } from '../redux/gallerySlice'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const shape = useSelector((state: RootState) => state.base)

    return (
        <div className="avatar-generator-main">
            <h1>Create your avatar!</h1>
            <div className='avatar-container'>
                <div className='left-side-avatar'>
                    {Object.values(shape).map((item, index) => (
                        (item.url !== null) ? <img src={item.url} alt='avatar-item' className={`selected-item ${item.name}-avatar`} key={index} /> : null
                    ))}

                </div>
                <div className='avatar-rightside-items'>
                    <Navigation />
                </div>

            </div>
            <div className='btn-avatar-action'>
                <button onClick={() => dispatch(saveAvatar({ avatar: shape }))}>Save</button>
                <button onClick={() => navigate('/gallery')}>gallery</button>
            </div>
        </div>
    );
};

export default Home;