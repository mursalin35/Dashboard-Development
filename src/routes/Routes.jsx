import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
    // Auth Route 
    {
        path: "/",
        element: <AuthLayout/>,
        children: [
            {
                path: 'login', 
                element: <LoginPage/>
            }
        ]
    }
])

export default router