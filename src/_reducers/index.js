import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { image } from './image.reducer';
import { message } from './message.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  image,
  message
});

export default rootReducer;
