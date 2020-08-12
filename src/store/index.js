import { combineReducers } from 'redux';
import chatting from './chatting';

export default combineReducers({
  chatting,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});