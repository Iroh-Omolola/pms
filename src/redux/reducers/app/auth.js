import { LOGIN, LOGOUT, REGISTER, UPDATE_SESSION_TOKEN } from '../../actions';

const defaultState = {
    user: {
        data: undefined,
        session: undefined,
    },
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER.SUCCESS:
        case LOGIN.SUCCESS:
            return Object.assign({}, state, {
                user: {
                    ...state.user,
                    session: action.payload,
                }
            });
       
        case UPDATE_SESSION_TOKEN:
            return Object.assign({}, state, {
                user: {
                    ...state.user,
                    session: action.payload,
                }
            });
        case LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default appReducer;