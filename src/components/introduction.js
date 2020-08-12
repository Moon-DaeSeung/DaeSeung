import React, {Component, Fragment} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './introduction.css'


const Body_container = styled.div
`

`
function Selfintroduction () {
    return (
    <Fragment>
      <Body_container className="body_container">
     
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
      </Body_container>

      <div className="body_container2">
      <div className="item1"> 
      <ul className="ul">
        <li>2017 서울대학교 졸업</li><li>2019 공군 제대</li><li>2019 원산지관리사 취득</li>
      </ul>
      </div>
      <div className="item2"> 
      <ul className="ul">
        <li>한국어 자격증 1급</li><li>한자 진흥회 3급</li><li>교원 자격증 2급</li>
      </ul>
      </div>
      <div className="item3">
       <div>#본질을금방꿰뚫어봄</div>
       <div>#매우낙관적</div><div>#덤벙이</div>
       <div>#겁이없음</div>
       <div>문대승 안의  8가지 성격</div><div>#합리주의자</div>
       <div>#섬세한편</div><div>#유혹에약한편</div>
       <div>#주변에잘맞춰주는편</div>
       
      </div>
      </div>
   
    </Fragment>

    )
}


export default Selfintroduction;