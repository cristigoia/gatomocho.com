import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPages, getPage } from '../reducers/pages';

class PageSingle extends Component {
    componentDidMount() {
        this.props.fetchPages();
    }

    render() {
        if (this.props.page.length) {
            const page = this.props.page[ 0 ];

            return (
                <div className="document-single">
                    <h1>{ page.meta.title }</h1>

                    <div dangerouslySetInnerHTML={ { __html: page.body } }/>
                </div>
            );
        } else {
            return (<p>...</p>);
        }
    }
}

export default connect(
    (state, ownProps) => ({ page: getPage(state.page.pages, ownProps.id) }),
    { fetchPages, getPage }
)(PageSingle);
