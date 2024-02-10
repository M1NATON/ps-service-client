import React from 'react';
import './index.scss';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <>
            <Header/>

            <AppRouter/>
            <Footer/>
        </>
    );
}

export default App;
