import React from 'react'
import ContainerMains from './ContainerMains'
import ContainerDishes from './ContainerDishes'
import Footer from './Footer';
import MainState from '../context/Menu/MainState';

const Menu = () => {
    return (
        <MainState>
            <ContainerMains />
            <hr/>
            <ContainerDishes />
            <Footer />
        </MainState>
    )
}

export default Menu
