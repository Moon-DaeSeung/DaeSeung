import React, {Fragment, Component} from "react";
import styled from "styled-components"
import Header from "./components/header"
import Phonm_test from "./components/phonm_test";
import Selfintroduction from "./components/introduction"
import Footer from "./components/footer";

class App extends Component {



    render () {
        return (
            <Fragment>
               <Header></Header>
           <Selfintroduction/>
          
           <Footer></Footer>
            </Fragment>
        )

        
    
    }
}

export default App;