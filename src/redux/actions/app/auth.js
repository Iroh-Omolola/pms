import { createActionType, createActionString } from '../../../_shared/util';

export const REGISTER = createActionType('REGISTER', 'Authentication');
export const LOGIN = createActionType('LOGIN', 'Authentication');
export const LOGOUT = createActionString('LOGOUT', 'auth');


export const register = payload => ({
    type: REGISTER.START,
    meta: { payload },
});

export const login = payload => ({
    type: LOGIN.START,
    meta: { payload },
});

export const logout = () => ({
    type: LOGOUT,
});