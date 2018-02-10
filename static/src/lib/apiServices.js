const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPosts = () => {
    return fetch(baseUrl + '/posts')
        .then(res => res.json());
};

export const getPages = () => {
    return fetch(baseUrl + '/pages')
        .then(res => res.json());
};
