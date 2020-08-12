import React, {Component, Fragment} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './footer_header.css'
import {Link} from "react-router-dom"
const text = ""
const mytext = styled.div
`

`

function Header () {
    return (
    <Fragment>
      <div className="header_container">
      <div className = "header_item">self-introduction</div>
      <Link to="/"  className = "header_item">home</Link>
      <div className = "header_item">my hobby</div>
      <Link to="/contact" className = "header_item">contact</Link>
      </div>
    </Fragment>

    );
}


export default Header;