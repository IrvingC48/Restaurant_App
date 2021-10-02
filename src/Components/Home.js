import React from 'react'
import Contact from './Contact';
import Footer from './Footer';
import Form from './Form';
import Jumbotron from './Jumbotron';

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Form />
            <hr/>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
