import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPages } from './reducers/pages';
import logo from './logo.png';
import './App.css';
import PostList from './components/PostList';
import PostSingle from './components/PostSingle';
import PageSingle from './components/PageSingle';
import Footer from './components/Footer';
import PagesList from './components/PagesList';

class App extends Component {
    componentDidMount() {
        this.props.fetchPages();
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <section className="app">
                        <aside className="app--nav">
                            <header className="app--header">
                                <img src={ logo } alt="gato mocho's logo"/>
                                <h1>Gato Mocho</h1>

                                <p className="hide-on-desktop">
                                    Independent game & app development.
                                </p>

                                <p className="hide-on-mobile">
                                    Independent game & app development. Part time game developers who are passionate
                                    about making games.
                                </p>
                            </header>

                            <PagesList/>
                        </aside>

                        <main className="app--content">

                            <Route exact path="/post/:id"
                                   render={ ({ match }) => (<PostSingle id={ match.params.id }/>) }/>

                            <Route exact path="/:id"
                                   render={ ({ match }) => (<PageSingle id={ match.params.id }/>) }/>

                            <Route exact path="/" component={ PostList }/>

                        </main>
                    </section>
                </Router>

                <Footer/>
            </div>
        );
    }
}

// export default App;

export default connect(
    (state) => ({ pages: state.page.pages }),
    { fetchPages }
)(App);
