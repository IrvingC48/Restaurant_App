import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="pt-3">
            <footer className="footer">
                <div className="level">
                    <div className="level-item">
                        <div className="redes-footer">
                            <a href="https://es-la.facebook.com/">
                                <ion-icon name="logo-facebook" size="large"></ion-icon>
                            </a>
                        </div>
                        <div className="redes-footer">
                            <a href="https://www.instagram.com/?hl=es">
                                <ion-icon name="logo-instagram" size="large"></ion-icon>
                            </a>
                        </div>
                        <div className="redes-footer">
                            <a href="https://mx.linkedin.com/">
                                <ion-icon name="logo-linkedin" size="large"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <p className="level-item has-text-weight-bold is-size-3 is-size-2-mobile is-italic">La Trattoria</p>
                    <div className="level-item is-hidden-mobile">@IrvingCisnerosCastillo</div>
                </div>
                <div className="level">
                    <p className="level-item buttons are-small">
                        <Link className="button is-inverted is-link" to="/">CONTACTO</Link>
                        <Link className="button is-inverted is-link" to="/">TÉRMINOS Y CONDICIONES</Link>
                        <Link className="button is-inverted is-link" to="/">AVISO DE PRIVACIDAD</Link>
                        <Link className="button is-inverted is-link" to="/">PROMOCIONES</Link>
                    </p>
                </div>
                <div className="level">
                    <p className="level-item">
                        <br/>
                        © 2021 Mi Restaurante Inc. | Está página fue diseñada con fines didácticos.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
