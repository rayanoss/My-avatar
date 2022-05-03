import React, { useState } from 'react';
import Card from './Card';

const Navigation = () => {
    const [tab, setTab] = useState('Hair')

    const updateTab = (e: React.MouseEvent<HTMLInputElement>) => {
        setTab(e.currentTarget.value)
    }
    return (
        <>
            <div className='avatar-navigation-menu'>
                <input type="submit" value="Hair" onClick={(e) => updateTab(e)} />
                <input type="submit" value="Nose" onClick={(e) => updateTab(e)} />
                <input type="submit" value="Beard" onClick={(e) => updateTab(e)} />
                <input type="submit" value="Mouth" onClick={(e) => updateTab(e)} />
                <input type="submit" value="Eyes" onClick={(e) => updateTab(e)} />
                <input type="submit" value="Glasses" onClick={(e) => updateTab(e)} />
            </div>

            <Card tab={tab} />
        </>
    );
};

export default Navigation;