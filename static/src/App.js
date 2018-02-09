import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import PostList from './components/PostList';
import PostSingle from './components/PostSingle';
import Nav from './components/Nav';
import AboutPage from './components/About';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Router>
                    <section className="app">
                        <aside className="app--nav">
                            <header className="app--header">
                                <img src={ logo } alt="gato mocho's logo"/>
                                <h1>Gato Mocho</h1>
                                <p>Indie game & app development</p>
                            </header>

                            <Nav/>
                        </aside>

                        <section className="app--content">
                            <Route path="/post/:id" render={ ({ match }) => (<PostSingle id={ match.params.id }/>) }/>
                            <Route path="/about" component={ AboutPage }/>
                            <Route exact path="/" component={ PostList }/>
                        </section>
                    </section>
                </Router>

                <Footer/>
            </div>
        );
    }
}

export default App;
