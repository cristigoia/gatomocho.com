import { getPosts } from "../lib/apiServices";

const initState = {
    posts: []
};

export const POSTS_LOAD = 'POSTS_LOAD';

export const loadPosts = (posts) => ({ type: POSTS_LOAD, payload: posts });

export const fetchPosts = () => {
    return (dispatch) => {
        // dispatch(showMessage('Loading Posts'));
        getPosts()
            .then((posts) => dispatch(loadPosts(posts)));
    };
};

export const getPost = (posts, id) => posts.filter(post => post.id === id);

export default (state = initState, action) => {
    switch (action.type) {
        case POSTS_LOAD:
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};