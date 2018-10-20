import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Store from '../components/Store.jsx';
import About from '../components/About.js';
import TitleWord from '../components/TitleWord.jsx';
import '../App.css';


import dogCookieBackdrop from '../images/dog-cookies.jpg';
import pupIcon from '../images/pupIcon.svg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
    }


    renderPageView() {
        if (this.state.page === 0)
            return <Store />
        if (this.state.page === 1)
            return <About />
    }

    render() {
        return (
            <div>                
                <Navbar />
                <TitleWord />
                <div className="App">
                    <div className="App-content">
                        <header className="App-header">
                            {/* <h1 className="App-title">  Pip Pup Cookies</h1> */}
                            <p className="App-intro">
                                Places in new york that have qualities that one would conclude make them good.
                            </p>
                        </header>
                        {this.renderPageView()}
                    </div>
                </div>
                {/* <div className="container">
                    <h2>Welcome to Test Website</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa corrupti eligendi. </p>
                    <p>Aliquid neque, autem magnam sapiente delectus dolores vitae, ad maxime laboriosam recusandae totam, nesciunt ipsa voluptatum minima error!</p>
                </div> */}
            </div>
        );
    }
}

export default Home