import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ServicesPage from "../pages/Services/ServicesPage";
import FeedbackPage from "../pages/Feedback/FeedbackPage";
import FAQPage from "../pages/FAQ/FAQPage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import AboutPage from "../pages/About/AboutPage";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import ServiceItemPage from "../pages/ServiceItemPage/ServiceItemPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route key='/' path='/' element={<HomePage/>}/>
                <Route key='/services' path='/services' element={<ServicesPage/>}/>
                <Route key='/services/:service_id' path='/services/:service_id' element={<ServiceItemPage/>}/>
                <Route key='/feedback' path='/feedback' element={<FeedbackPage/>}/>
                <Route key='/faq' path='/faq' element={<FAQPage/>}/>
                <Route key='/contacts' path='/contacts' element={<ContactsPage/>}/>
                <Route key='/about' path='/about' element={<AboutPage/>}/>
                <Route key='/admin' path='/admin' element={<AdminPanel/>}/>
                <Route key='/*' path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;