import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import SignIn from "./components/Auth/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> }
        ]
    },
    {
        path: '/auth',
        element: <AuthPage />,
        children: [
            { path: 'login', element: <SignIn /> }
        ]
    }
])


export default router