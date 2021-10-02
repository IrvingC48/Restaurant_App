import React, { useContext, useEffect } from 'react'
import MainContext from '../context/Menu/MainContext';
import Dish from './Dish'

const ContainerDishes = () => {
    const { mains, selectedMain, getDish } = useContext(MainContext);

    useEffect(() => {
        if (mains.length > 0 && (selectedMain === null)){
            getDish(mains[0].Main);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mains, selectedMain]);

    return (
        <div className="section is-medium pt-0 is-grid cols3">
            {selectedMain &&
                selectedMain.map(dish => {
                    return(
                        <Dish key={dish.name} dishObject={dish} />
                    )
                })
            }
        </div>
    )
}

export default ContainerDishes
