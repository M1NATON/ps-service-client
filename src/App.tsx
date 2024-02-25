import React from 'react';
import './index.scss';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

function App() {
    return (

        <div className='wrapper'>
            <Header/>
            <div className='wrapper__main'>
                <AppRouter/>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
