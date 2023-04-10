import React from 'react';
import Main from "./pages/main/main";
import Works from "./pages/works/works";
import AdminLogin from "./pages/admin/admin-login";
import AdminSettings from "./pages/admin/admin-settings";
import {Navigate, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/works/:id" element={<Works/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path='/admin/settings/*' element={<AdminSettings/>}/>
            <Route path='*' element={<Navigate to ="/"/>}/>
        </Routes>
    );
};

export default App;