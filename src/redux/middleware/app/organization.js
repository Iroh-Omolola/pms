/* eslint-disable import/no-anonymous-default-export */
import {  FETCH_ORGANIZATION, UPDATE_ORGANIZATION} from "../../actions/app";
import { apiRequest, POST, GET } from '../../actions/index';
import * as urls from '../../../_shared/defs/_urls';

const { API } = urls;

const updateOrganizataion = ({ dispatch }) => next => action => {
    next(action);
    const { type, payload, key, ...rest } = action;

    if (type === UPDATE_ORGANIZATION.START) {
        dispatch(
            apiRequest({
                method: POST,
                url: `${API.UPDATE_ORGANIZATION}`,
                key: key || 'updateOrganization',
                onSuccess: data => {
                    dispatch({ type: UPDATE_ORGANIZATION.SUCCESS});     
                },
                ...rest,
            })
        )
    }
};

const fetchOrganization = ({ dispatch }) => next => action => {
    next(action);
    const { type, payload, key, ...rest } = action;
    if (type === FETCH_ORGANIZATION.START) {
        dispatch(
            apiRequest({
                method: GET,
                url: `${API.FETCH_ORGANIZATION}`,
                key: key || 'fetchOrganization',
                onSuccess: data => {
                    dispatch({ type: FETCH_ORGANIZATION.SUCCESS })
                },
                ...rest,
            })
        )
    }
};





export default [
    updateOrganizataion,
    fetchOrganization,
    
];