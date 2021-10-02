import React from 'react'
import imgJumbo from '../images/jumbo.jpg'

const Jumbotron = () => {
    return (
        <div className="columns pt-2">
            <section className="column hero is-medium">
                <div className="hero-body m-2">
                    <p className="title is-italic">
                        SPAGHETTI ITALIANO
                    </p>
                    <span className="subtitle is-italic">
                        Consiente a tu paladar, con una <span className="has-text-weight-bold">¡DELICIOSA PASTA!</span>
                        <hr/>
                        Ven a nuestra casa, donde la comida y el ambiente, es lo esencial en nuestros clientes.
                        <br />
                        Ingredientes frescos, y una excelente calidad en cada uno de nuestros platillos.
                    </span>
                </div>
            </section>
            <div className="column m-2">
                <img src={imgJumbo} alt="img-Jumbo"/>
            </div>
        </div>
    )
}

export default Jumbotron
