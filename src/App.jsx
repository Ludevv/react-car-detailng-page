import React from 'react';
import "regenerator-runtime/runtime.js"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Media from './components/Media/Media'
import StoreProvider from './store/StoreProvider'
import {HashRouter as Router } from 'react-router-dom'

import './App.scss';

const App = () => ( 
    <>
    <StoreProvider>
        <Router>
            <Header/>
            <div className="content-wrapper">
                <Content/>
            </div>
            <Footer/>
        </Router>
    </StoreProvider>
    <Media/>
    </>
 );

 
export default App;