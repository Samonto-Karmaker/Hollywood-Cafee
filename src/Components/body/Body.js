import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router';

const Body = () => {
    return(
        <div>
            <Routes>
                <Route path = "/" exact element = {<Home />}/>
                <Route path = "/menu" exact element = {<Menu />}/>
                <Route path = "/about" exact element = {<About />}/>
                <Route path = "/contact" exact element = {<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body