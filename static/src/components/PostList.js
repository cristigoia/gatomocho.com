import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../reducers/post';
import utils from '../lib/utils';

const PostItem = ({ id, title, date }) => (
    <li className="card">
        <Link to={ '/post/' + id }>
            <p>{ date }</p>
            { title }
        </Link>
    </li>
);

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    static comparePostDates(postA, postB) {
        const dateA = new Date(postA.meta.date);
        const dateB = new Date(postB.meta.date);

        return dateB - dateA;
    }

    render() {
        const sortedPosts = this.props.posts.sort(PostList.comparePostDates);

        return (
            <ul className="card-container">
                { sortedPosts.map(post =>
                    <PostItem
                        key={ post.id }
                        title={ post.meta.title }
                        content={ post.body }
                        date={ utils.dateFormat(post.meta.date) }
                        { ...post }
                    />)
                }
            </ul>
        );
    }
}

export default connect(
    (state) => ({ posts: state.post.posts }),
    { fetchPosts }
)(PostList);
