import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./Home/HomePage";
import ServicesPage from "./Services/ServicesPage";
import FeedbackPage from "./Feedback/FeedbackPage";
import FAQPage from "./FAQ/FAQPage";
import ContactsPage from "./Contacts/ContactsPage";
import AboutPage from "./About/AboutPage";
import AdminPanel from "./AdminPanel/AdminPanel";
import {Navigation} from "swiper/types/modules";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route key='/' path='/' element={<HomePage/>} />
                <Route key='/services' path='/services' element={<ServicesPage/>} />
                <Route key='/feedback' path='/feedback' element={<FeedbackPage/>} />
                <Route key='/faq' path='/faq' element={<FAQPage/>} />
                <Route key='/contacts' path='/contacts' element={<ContactsPage/>} />
                <Route key='/about' path='/about' element={<AboutPage/>} />
                <Route key='/admin' path='/admin' element={<AdminPanel/>} />
                <Route key='/*' path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;