const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPosts = () => {
    return fetch(baseUrl)
        .then(res => res.json());
};
