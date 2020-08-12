const LEAVING_MESSAGE = 'LEAVING_MESSAGE';
const DELETING_MESSAGE = 'DELETING_MESSAGE';
const SHOWING_MESSAGE = 'SHOWING_MESSAGE';

export const leavingMessage = (message, password, name) => 
{ 
  return {
    type: LEAVING_MESSAGE, 
    message: message, 
    password: password, 
    name: name}}

export const deletingMessage = (id) => {
  return {
  type:DELETING_MESSAGE, 
  id: parseInt(id)}
}
export const showingMessage = (messageList) =>
{
  return {
    type: SHOWING_MESSAGE,
    messageList: messageList
  }
} 


export default function chatting (state = [], action) {
    switch (action.type) {
        case LEAVING_MESSAGE:
          
            
          return  state.concat({message: action.message, id: Date.now(), password: action.password, name: action.name})
            
        case DELETING_MESSAGE:
          return state.filter(toDo => toDo.id !== action.id);
        
        case SHOWING_MESSAGE:
          return action.messageList;
        default:
          return state;
      }
    }     