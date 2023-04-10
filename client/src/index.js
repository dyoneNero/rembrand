import React from 'react';
import ReactDOM from 'react-dom/client';

import {HashRouter, Navigate, Route, Routes} from "react-router-dom";

import './index.scss';

import Main from "./pages/main/main";
import AdminLogin from "./pages/admin/admin-login";
import AdminSettings from "./pages/admin/admin-settings";
import Works from "./pages/works/works";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/works/:id" element={<Works/>}/>
              <Route path="/admin" element={<AdminLogin/>}/>
              <Route path='/admin/settings/*' element={<AdminSettings/>}/>
              <Route path='*' element={<Navigate to ="/"/>}/>
          </Routes>
      </HashRouter>
  </React.StrictMode>
);