import React from 'react';

import imageSrc from '../../assets/meals.jpg';
import HeaderCss from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={HeaderCss.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={HeaderCss['main-image']}>
                <img src={imageSrc} alt='test'/>
            </div>
        </>
    )
}

export default Header;