/* eslint-disable import/no-anonymous-default-export */
import {  FETCH_ORGANIZATION, UPDATE_ORGANIZATION} from "../../actions/app";
import { apiRequest, POST, GET } from '../../actions/index';
import * as urls from '../../../_shared/defs/_urls';
import _ from 'lodash';

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
                    dispatch({ type: UPDATE_ORGANIZATION.SUCCESS, payload: data });
                   
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
                url: `${API.GET_ORGANIZATION}`,
                key: key || 'fetchOrganization',
                onSuccess: FETCH_ORGANIZATION.SUCCESS,
                ...rest,
            })
        )
    }
};





export default [
    updateOrganizataion,
    fetchOrganization,
    
];