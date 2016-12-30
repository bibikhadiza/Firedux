import { combineReducers } from 'redux-immutable';
import routing from './routing';

const Reducers = combineReducers({
    routing: routing,
});

export default Reducers;
