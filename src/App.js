import React, {Fragment, Component} from "react";
import {HashRouter, Route} from "react-router-dom"

import styled from "styled-components"
import Header from "./components/header"
import Phonm_test from "./components/phonm_test";
import Selfintroduction from "./components/introduction"
import Footer from "./components/footer";
import Home from "./routes/home"
import Contact from "./routes/contact"
class App extends Component {



    render () {
        return (
            <Fragment>
            
            <HashRouter>
            <Header/>
            <Route path="/" exact={true} component={Home} />
            <Route path="/contact" component={Contact} />
           </HashRouter> 
           <Footer/>
            </Fragment>
        )

        
    
    }
}

export default App;