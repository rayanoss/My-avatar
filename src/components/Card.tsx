import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setBase } from '../redux/baseSlice';
import { items } from './items'

interface Props {
    tab: string,
}
const Card = ({ tab }: Props) => {
    const dispatch = useDispatch()
    const listItem = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState<number | null>(null)

    const isActive = (i: number) => {
        if (selected !== null && listItem.current !== null) listItem.current.children[selected].className = 'avatar-item'
        setSelected(i)
        listItem.current!.children[i].className = 'avatar-item active'
    }

    const updateAvatar = (url: string, key: string) => {
        dispatch(setBase({ url, category: key }))
    }

    useEffect(() => {
        setSelected(null)
    }, [tab])

    return (
        <>
            {
                Object.keys(items).map(tabName => (
                    (tab.toUpperCase() === tabName.toUpperCase()) ? <div className='list-item' ref={listItem} key={tabName}>
                        {items[tabName as keyof typeof items].map(el => (
                            <img className="avatar-item" src={el.url} alt={el.name} key={el.id} onClick={() => {
                                updateAvatar(el.url, tabName.toLowerCase())
                                isActive(el.id)
                            }} />
                        ))}
                    </div> : null
                ))
            }
        </>
    );
};

export default Card;