import { Navigate, useRoutes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

export default function Router(){
    return useRoutes([
        {
            path:"/",
            element:<Signup/>
        },
        {
            path:"/signin",
            element:<Signin />
        }
    ])
}