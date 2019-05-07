import React from 'react';

import Header from './Header';
import Footer from './Footer';

import containerStyles from './Container.module.css';

export default ({ children }) => ( 
    <div className={ containerStyles.container }> 
        <Header />
        { children } 
        <Footer />
    </div>
);

