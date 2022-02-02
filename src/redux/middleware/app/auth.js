/* eslint-disable import/no-anonymous-default-export */
import * as urls from '../../../_shared/defs/_urls';
import { apiRequest,resetUI, LOGIN, REGISTER, navigateTo, POST,LOGOUT, updateUIError} from '../../actions/index';

const { API, APP } = urls;


const register = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === REGISTER.START) {
        dispatch(
            apiRequest({
                method: POST,
                url: API.REGISTER,
                key: 'register',
                noErrorToast: true,
                onSuccess: data => {
                    if(data){
                        dispatch(navigateTo(`${APP.REGISTER}`));
                    }else{
                        dispatch(updateUIError('register', ''));
                    }
                    dispatch({ type: REGISTER.SUCCESS, payload: data });
                   
                },
                ...action.meta,
            })
        )
    }
};

const login = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === LOGIN.START) {
        dispatch(
            apiRequest({
                method: POST,
                url: API.LOGIN,
                key: 'login',
                noErrorToast: true,
                onSuccess: data => {
                    if(data){
                        dispatch(navigateTo(`${APP.DASHBOARD}`));
                    }else{
                        dispatch(updateUIError('login', 'Wrong login credentials'));
                    }
                    dispatch({ type: LOGIN.SUCCESS, payload: data });
                   
                },
                ...action.meta,
            })
        )
    }
};


const logout = ({ dispatch }) => next => action => {
    next(action);
    const { type } = action;
    if (type === LOGOUT) {
      (async () => {
        dispatch(window.location = '/login');
        dispatch(resetUI());
      })();
    }
  };

export default [
    register,
    login,
    logout,
]