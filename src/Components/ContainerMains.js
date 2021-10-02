import React, { useEffect, useContext } from 'react'
import MainContext from '../context/Menu/MainContext';
import Mains from './Mains'

const ContainerMains = () => {

    const { mains, getMain, getDish } = useContext(MainContext);

    useEffect(() => {
        getMain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="section is-small">
            <section className="level is-mobile">
                {mains.map(main => {
                    return (
                        <Mains key={main.Main} main={main.Main} onClicked={() => getDish(main.Main)} />
                    )
                })
                }
            </section>
        </div>
    )
}

export default ContainerMains
