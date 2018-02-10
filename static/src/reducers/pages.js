import { getPages } from "../lib/apiServices";

const initState = {
    pages: []
};

export const PAGES_LOAD = 'PAGES_LOAD';

export const loadPages = (pages) => ({ type: PAGES_LOAD, payload: pages });

export const fetchPages = () => {
    return (dispatch) => {
        // dispatch(showMessage('Loading Posts'));
        getPages()
            .then((pages) => dispatch(loadPages(pages)));
    };
};

export const getPage = (pages, id) => {
    // debugger;
    return pages.filter(page => page.id === id);
};

export default (state = initState, action) => {
    switch (action.type) {
        case PAGES_LOAD:
            return { ...state, pages: action.payload };
        default:
            return state;
    }
};