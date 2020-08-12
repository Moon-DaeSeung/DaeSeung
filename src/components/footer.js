import React, {Component, Fragment} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './footer_header.css'

const text = ""
const mytext = styled.div
`

`

function Footer () {
    return (
    <Fragment>
      <div className="footer_container">
      <div className="contact">MY PHONE: 010-2307-1189<pre/>
      MY EMAIL: tmdeoans@snu.ac.kr<pre/>
      MY INSTAGRAM: daeseungseung94</div>
      <div className="whoami">WHO AM I</div>
      <div className="self">I'm DaeSeung I'm graduated from Seoul national University with major in physics education
       I love science and programming  
      </div>
      </div>
    </Fragment>

    )
}


export default Footer;