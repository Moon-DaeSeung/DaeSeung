import React, {Component, Fragment} from "react";
import {useState} from "react";
import styled from "styled-components";
import mypicture from "../img/picture.jpg"
import './chatting.css'
import {deletingMessage, leavingMessage, showingMessage} from "../store/chatting"
import { connect } from 'react-redux';
import axios from 'axios';


  

class Chatting extends Component  {

  

  constructor(props) {
    super(props);
     this.inputName = React.createRef();
    this.inputPassword = React.createRef();
    this.inputMessage = React.createRef();
    this.url = 'http://1.237.86.130:8080/comment/'
  }

  adding = (message, password,  name) => {
    
    if (this.inputName.current.value !=="" && this.inputPassword.value !=="")
     {
    this.props.leavingMessage(message, password, name);
    this.inputMessage.current.value = "";
    this.inputName.current.value = "";
    this.inputPassword.current.value = ""; 
    }
    else {
      alert("작성자 성명과 게시글의 비밀번호를 입력해 주세요 ㅋㅋ루삥뽕")
    }

    axios.post(this.url, {
      message: message,
      password: password,
      name : name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

   deleting = (id,password) => {
     let input_password = prompt("password를 입력하시오", '')
    if (input_password == password) {
     this.props.deletingMessage(id);
    }
    else if(input_password == null ){
     return;
    }
    else {alert("password가 틀렸습니다")}

    axios.delete(this.url  + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
   showingMessage = () => {
   
    axios.get(this.url)
       .then(res => {
         
         console.log(res)
         this.props.showingMessage(res.data)
       }) }
   

  componentDidMount () {
    
    this.showingMessage();
    
  }


  render () {
    
    const {messages} = this.props
    
    
    return (
    <Fragment>
     <div className="chat_container">
        <label>방명록</label> 
      <div className="chat_box">
      <ul>
      {messages.map( (item) => 
      <Fragment>
      <div className = "Li_box">   
      <li>{item.message}</li> <div className = "Li_작성자">-{item.name}</div>
      <button onClick={() => this.deleting(item.id, item.password)} id ={item.id} className="Li_button">삭제</button>
      </div>
      </Fragment>
       )}
      
      </ul>    
      </div>
      
      <div className="input_box">
      
      <input className ="name" ref={this.inputName} placeholder="이름" ></input> 
      <input className="password"  ref={this.inputPassword} placeholder="비밀번호" type="password"  ></input>
      <textarea className = "message" ref={this.inputMessage} placeholder="대승이에게 보낼 따듯한 한 마디 부탁드려요 ^^" ></textarea>
      <button className="insert" type="text" onClick={() => this.adding(this.inputMessage.current.value,
        this.inputPassword.current.value, this.inputName.current.value)} >저장</button>
      
      </div>
      
     </div>
    </Fragment>
       
    )}
  
    
}



// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  messages: state.chatting
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch,  ownProps) => ({
  leavingMessage: (message, password, name)  => dispatch(leavingMessage(message, password, name)),
  deletingMessage: (id) => dispatch(deletingMessage(id)),
  showingMessage: (messageList) => dispatch(showingMessage(messageList))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatting);

