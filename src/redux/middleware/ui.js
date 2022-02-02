/* eslint-disable import/no-anonymous-default-export */
import { push } from 'connected-react-router'
import { UI_NAVIGATE } from '../actions';

export const navigateTo = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === UI_NAVIGATE) {
        console.log('action.payload:', action.payload);
        dispatch(push(window.location = action.payload));
    }
};

export default [navigateTo];