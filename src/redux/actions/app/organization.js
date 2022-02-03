import { createActionType, createActionString } from '../../../_shared/util';

export const UPDATE_ORGANIZATION = createActionType('UPDATE_ORGANIZATION', 'organization');
export const FETCH_ORGANIZATION= createActionType('FETCH_ORGANIZATION', 'organization');
export const RESET_ORGANIZATION= createActionString('RESET_ORGANIZATION', 'organization');


export const updateOrganization = (payload, params = {}) => ({
    type: UPDATE_ORGANIZATION.START,
    payload,
    params,
});

export const fetchOrganization = (params = {}) => ({
    type: FETCH_ORGANIZATION.START,
    meta: { params },
});

export const resetOrganization = () => ({
    type: RESET_ORGANIZATION.START
});
