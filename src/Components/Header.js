import React from 'react'
import Home from './Home'
import Menu from './Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const header = () => {
    return (
        <Router>
            <div>
                <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <h1 className="navbar-item has-text-weight-bold has-text-light is-size-3 is-italic">la Trattoria</h1>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbar" className="navbar-menu is-active">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                <span className="icon">
                                    <ion-icon name="home-sharp"></ion-icon>
                                </span>
                                Home
                            </Link>

                            <Link className="navbar-item" to="/menu">
                                <span className="icon">
                                    <ion-icon name="restaurant-sharp"></ion-icon>
                                </span>
                                Menu
                            </Link>
                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <button className="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light">
                                Log in
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>

            <Switch>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default header
