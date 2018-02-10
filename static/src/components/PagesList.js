import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPages } from '../reducers/pages';

const PageItem = ({ id, title }) => (
    <li>
        <NavLink exact to={ '/' + id } activeClassName="active">{ title }</NavLink>
    </li>
);

class PageList extends Component {
    componentDidMount() {
        this.props.fetchPages();
    }

    filterHiddenPages(pages) {
        return pages.filter(page => page.meta.is_listed);
    }

    render() {
        const pages = this.filterHiddenPages(this.props.pages);

        return (
            <nav>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName="active">Home</NavLink>
                    </li>

                    { pages.map(page =>
                        <PageItem
                            key={ page.id }
                            title={ page.meta.title }
                            content={ page.body }
                            { ...page }
                        />)
                    }
                </ul>
            </nav>
        );
    }
}

export default withRouter(
    connect(
        (state) => ({ pages: state.page.pages }),
        { fetchPages }
    )(PageList)
);
