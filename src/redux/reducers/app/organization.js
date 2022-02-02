import { FETCH_ORGANIZATION, UPDATE_ORGANIZATION , RESET_ORGANIZATION } from "../../actions/app";

const defaultState = {
    organization: {},
    organizations: [],
};

const organizationReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_ORGANIZATION.SUCCESS:
            return Object.assign({}, state, { organization: payload });
        case FETCH_ORGANIZATION.SUCCESS:
            return Object.assign({}, state, { organizations: payload.data });
        case RESET_ORGANIZATION:
            return Object.assign({}, state, { organization: {} });
        default:
            return state;
    }
};

export default organizationReducer;