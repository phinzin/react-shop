import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './shared/header';
import Footer from './shared/footer';
import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Shop" : "React.js Shop" }</title>
            <meta name = "description" content={ description || "React.js Shop" } />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;