import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../reducers/post';

const PostItem = ({ id, title }) => (
    <li className="card">
        <Link to={ '/post/' + id }>{ title }</Link>
    </li>
);

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    comparePostDates(postA, postB) {
        const dateA = new Date(postA.meta.date);
        const dateB = new Date(postB.meta.date);

        return dateB - dateA;
    }

    render() {
        const sortedPosts = this.props.posts.sort(this.comparePostDates);

        return (
            <ul className="card-container">
                { sortedPosts.map(post =>
                    <PostItem
                        key={ post.id }
                        title={ post.meta.title }
                        content={ post.body }
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
