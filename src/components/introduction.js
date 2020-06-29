import React, {Component, Fragment} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './introduction.css'

const text = ""
const mytext = styled.div
`

`

function Selfintroduction () {
    return (
    <Fragment>
      <div className="body_container">
     
      <div className="leftcontent"><img src={mypicture}></img></div>
      <div className="rightcontent">
      <div id="name">Moon Dae Seung</div>
      <div id="text">Culture makes people understand each other better.

And if they understand each other better in their soul,
it is easier to overcome the economic and political
barriers. But first they have to understand that their
neighbor is, in the end, just like them, with the same
problems, the same questions.
<pre></pre>&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Paulo Coelho-
      </div>  
      </div>
      </div>
    </Fragment>

    )
}


export default Selfintroduction;