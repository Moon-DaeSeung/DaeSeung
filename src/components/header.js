import React, {Component, Fragment} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './footer_header.css'

const text = ""
const mytext = styled.div
`

`

function Header () {
    return (
    <Fragment>
      <div className="header_container">
      <div>self-introduction</div><div>about</div><div>my hobby</div><div>contact</div>
      </div>
    </Fragment>

    );
}


export default Header;