/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import { push } from 'connected-react-router';
import { API_REQUEST, startLoading, updateSessionToken, stopLoading, uiSetPagination, updateUIError } from '../actions/index';
import { createAPIRequest } from '../../services/axios';
import { toast } from 'react-toastify';
import { formatMessagesFromError } from '../../_shared/util';

export const processApiError = error => {
    let response = '';
    if (!error) {
        response = 'An error occurred, please try again!';
    } else if (error.message) {
        response = error.message;
    }
    return response || 'An error occurred';
};

const apiRequest = ({ dispatch }) => next => action => {
    if (action.type === API_REQUEST.START) {
        const {
            method,
            url,
            key,
            payload,
            params,
            onError,
            successMessage,
            onSuccess,
            errorMessage,
            nextRoute,
            noSuccessToast,
            noErrorToast,
        } = action.meta;
        const config = { method, url };
        if (payload && (!_.isEmpty(payload) || payload instanceof FormData)) {
            config.data = payload;
        }
        if (params && !_.isEmpty(params)) {
            config.params = params;
        }
        dispatch(updateUIError(key, null));
        dispatch(startLoading(key));
        createAPIRequest(config)
            .then((response) => {
                console.log('api-response', response);
                const { data, success, message } = response;
                if (data && data.first_page_url) {
                    const {
                        per_page,
                        total,
                        last_page,
                        current_page,
                        prev_page_url,
                        first_page_url,
                        next_page_url
                    } = data;
                    dispatch(uiSetPagination(key, { per_page, total, last_page, current_page, prev_page_url, first_page_url, next_page_url }));
                }
                if (!_.isEmpty(data.token) && data) {
                    dispatch(updateSessionToken(data.token));
                }
                if (onSuccess) {
                    if (typeof onSuccess === 'function') {
                        onSuccess(data);
                    } else {
                        dispatch({ type: onSuccess, payload: {data} });
                    }
                }
                if (nextRoute) {
                    dispatch(push(nextRoute));
                }
                dispatch(stopLoading(key));
                const toastMessage = successMessage || message;
                if (!noSuccessToast && toastMessage) {
                    toast.dismiss();
                    toast.info(toastMessage);
                }
            })
            .catch(e => {
                console.log('err:', e);
                const showErrorMessage = message => {
                    if (!noErrorToast && method.toLowerCase() !== 'get') {
                        toast.error(message);
                    }
                };
                if (onError) {
                    if (typeof onError === 'function') {
                        onError(e);
                    } else {
                        const message = formatMessagesFromError(e);
                        console.log('err-message:', message);
                        dispatch(updateUIError(key, message));
                        showErrorMessage(e.message ? e.message : 'Check your internet connection.');
                    }
                } else {
                    const error = (e && e.data && e.data.data) || (e && e.error) || e;
                    console.log('error:', error.data.errors);
                    dispatch(updateUIError(key, error.data.errors?.password? error.data.errors?.password[0]:error.data.errors?.email[0] || error.data.message  
                                                ));
                    showErrorMessage(error ? error : 'Check your internet connection.');
                }
                dispatch(stopLoading(key));
            });
    }
    return next(action);
};

export default [apiRequest];