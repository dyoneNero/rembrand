import React from 'react';
import Main from "./pages/main/main";
import Works from "./pages/works/works";
import AdminLogin from "./pages/admin/admin-login";
import AdminSettings from "./pages/admin/admin-settings";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/admin",
        element: <AdminLogin/>
    },
    {
        path: "/works/:id",
        element: <Works/>
    },
    {
        path: "/admin/settings/*",
        element: <AdminSettings/>
    }
])

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;

// <Routes>
//     <Route path="/" element={<Main/>}/>
//     <Route path="/works/:id" element={<Works/>}/>
//     <Route path="/admin" element={<AdminLogin/>}/>
//     <Route path='/admin/settings/*' element={<AdminSettings/>}/>
// </Routes>