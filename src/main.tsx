import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';

import './styles/index.scss';
import { UserContextProvider } from './components/App/ContextProvider';
import Basket from './components/App/Basket';
import Beauty from './components/App/Beauty';
import Bill from './components/App/Bill';
import Signin from './components/App/Signin';
import Profile from './components/App/Profile';
import Login from './components/App/login';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <BrowserRouter>
    <UserContextProvider> 
    <Routes>
    
    <Route path="/" element={    <Beauty />} />

    <Route path="/basket" element={  <Basket />} />

    <Route path="/main" element={<App /> } />

    <Route path="/bill" element={  <Bill />} />

    <Route path="/signin" element={  <Signin />} />

    <Route path="/login" element={  <Login />} />

    <Route path="/profil" element={  <Profile />} />


        </Routes>
        </UserContextProvider>
        </BrowserRouter>

);
