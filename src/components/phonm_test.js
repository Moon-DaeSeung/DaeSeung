import React, { Component, Fragment } from "react";
import styled, { keyframes, css, CSSKeyframes, createGlobalStyle } from "styled-components";

const TextBox_word = styled.input`

border: 1px solid ;

height: 30px;
width: 70px;
text-align: center;
//border-color : ${props => (props.value !=="" ? 'black' : 'white')};
`

const TextBox = styled.input`

border: 1px solid ;

height: 15px;
width: 50px;
//border-color : ${props => (props.value !=="" ? 'black' : 'white')};
`
const inputBox = styled.input`
border: 1px solid black;
height: 15px;
width: 50px;

`;
const Wrap = styled.div
`  display: grid;
 
grid-template-columns: repeat(30,1fr);
grid-gap: 20px;
margin : 15px;
padding-top: 40px;

`;
const Wrap2 = styled.div
`display: flex;`

const Contents = {
  "빵" : {
    word: "빵",
    pronounce: "빵",
    std_phonm: ["ㅃ","ㅏ","ㅇ"]

  },
  "입" : {
    word: "입",
    pronounce: "입",
    std_phonm: [,"ㅣ","ㅂ"]

  },
  "아이스크림" : {
    word: "아이스크림",
    pronounce: "아이스크림",
    std_phonm: [,"ㅏ",,"ㅣ",,"ㅅ","ㅡ",,"ㅋ","ㅡ","ㄹ","ㅣ","ㅁ"]

  }
}
const hi = "phome1"
const Test = {a:"wow", b:"no"};
class Phonm_test extends Component {
  
  
  
  
  render() {
   
    return (
    
    <Fragment>
    
    { Object.keys(Contents).map((id)=>{ return( 
       <Wrap key = {id}>
       <TextBox_word   value = {Contents[id].word}></TextBox_word >
       <div><Wrap2>
       {Contents[id].std_phonm.map((std_phonm)=> {return(
       {std_phonm} !== "" ? <TextBox key ={id&&std_phonm} value = {std_phonm}></TextBox> : ""
      )})} </Wrap2>
      <Wrap2>
       {Contents[id].std_phonm.map((std_phonm)=> {return(

       {std_phonm} !== "" ? <TextBox key ={id&&std_phonm} ></TextBox> : ""
      )})} </Wrap2></div>
       </Wrap>
       )})}
    </Fragment>
  
    );
  }
}


export default Phonm_test