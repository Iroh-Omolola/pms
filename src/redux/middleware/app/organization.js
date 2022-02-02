/* eslint-disable import/no-anonymous-default-export */
import {  FETCH_ORGANIZATION} from "../../actions/app";
import { apiRequest, POST, GET } from '../../actions/index';
import * as urls from '../../../_shared/defs/_urls';
import _ from 'lodash';

const { API } = urls;

// const createDeals = ({ dispatch }) => next => action => {
//     next(action);
//     const { type, payload, key, ...rest } = action;
//     const formData = new FormData();
//     const {
//         title,
//         description,
//         category,
//         start_date,
//         end_date,
//         amount,
//         payment_option,
//         initial_deposit,
//         payment_frequency,
//         discount_amount,
//         images,
//     } = payload || {};

//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('category', category);
//     formData.append('start_date', start_date);
//     formData.append('end_date', end_date);
//     formData.append('amount', amount);
//     formData.append('payment_option', payment_option);
//     if (!_.isUndefined(initial_deposit)) {
//         formData.append('initial_deposit', initial_deposit);
//     }
//     if (!_.isUndefined(discount_amount)) {
//         formData.append('discount_amount', discount_amount);
//     }
//     if (!_.isUndefined(payment_frequency)) {
//         formData.append('payment_frequency', payment_frequency);
//     }

//     if (images) {
//         for (let i = 0; i < images.length; i++) {
//             formData.append(`images[${i}]`, images[i]);
//         }
//     }
    
//     if (type === CREATE_DEAL.START) {
//         dispatch(
//             apiRequest({
//                 method: POST,
//                 payload: formData,
//                 url: `${API.CREATE_DEAL}`,
//                 key: key || 'createDeals',
//                 onSuccess: CREATE_DEAL.SUCCESS,
//                 ...rest,
//             })
//         )
//     }
// };

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
    fetchOrganization,
    
];