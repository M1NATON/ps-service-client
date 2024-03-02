import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {ModalState} from "./context/ModalContext";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <BrowserRouter>
        <ModalState>
            <Provider store={store}>
                <App/>
            </Provider>
        </ModalState>
    </BrowserRouter>
);
