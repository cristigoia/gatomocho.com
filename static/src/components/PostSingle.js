import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, getPost } from '../reducers/post';

class PostSingle extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.post.length) {
            const post = this.props.post[ 0 ];

            return (
                <div className="document-single">
                    <h1>{ post.meta.title }</h1>

                    <div dangerouslySetInnerHTML={ { __html: post.body } }/>
                </div>
            );
        } else {
            return (<p>...</p>);
        }
    }
}

export default connect(
    (state, ownProps) => ({ post: getPost(state.post.posts, ownProps.id) }),
    { fetchPosts, getPost }
)(PostSingle);
