import React, {useEffect} from 'react';
import './index.scss';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import {userAPI} from "./services/UserService";
import {setUser} from "./store/reducers/userSlice";
import {useAppDispatch} from "./hooks/redux";
import {Toaster} from "react-hot-toast";

function App() {

    const {data, refetch} = userAPI.useProfileUserQuery()
    const dispatch = useAppDispatch()

    useEffect(() => {
        refetch()
        if(data) dispatch(setUser(data))
    }, [data]);

    return (
        <div className='wrapper'>
            <Header/>
            <div className='wrapper__main'>
                <AppRouter/>
            </div>
            <Footer/>
            <Toaster />
        </div>
    );
}

export default App;
