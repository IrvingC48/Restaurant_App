import React from 'react'

const Contact = () => {
    return (
        <div className="tile is-anscestor">
            <div className="tile is-parent">
                <div className="tile is-child is-flex is-justify-content-center">
                    <div className="content">
                        <h1 className="title is-flex is-justify-content-center">Domicilio</h1>
                        <br/>
                        <p className="subtitle">En algún lugar de un gran país.</p>
                        <p className="subtitle">Ciudad de México</p>
                        <p className="subtitle">CP. 55555</p>
                    </div>
                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child is-flex is-justify-content-center">
                    <div className="content">
                        <h1 className="title is-flex is-justify-content-center">Contacto</h1>
                        <br/>
                        <p className="subtitle">Irving Cisneros Castillo</p>
                        <p className="subtitle">55 7921 0144</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
