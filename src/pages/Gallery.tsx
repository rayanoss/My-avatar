import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import '../styles/Gallery.css'
const Gallery = () => {
    const gallery = useSelector((state: RootState) => state.gallery)
    return (
        <div>
            <ul className='gallery-avatar-list'>
                {gallery.map((el, index) => (
                    <li className='gallery-avatar-items' key={index}>
                        {Object.values(el).map((item, index) => (
                            <img src={item.url} alt={item.name} key={index} className={`item ${item.name}`} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gallery;