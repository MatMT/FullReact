import { createBrowserRouter } from 'react-router-dom';
// Componentes
import Layaout from './components/Layaout';
import Login from './pages/Login';
import Main from './pages/Main';
import Carreras from './pages/Carreras';
import Profile from './pages/Profile';
// Renombro loader
import Index, { loader as clientesLoader } from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layaout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader
            },
            {
                path: '/clientes/nuevo',
                element: <Login />
            },
            {
                path: '/main',
                element: <Main />
            },
            {
                path: '/carreras',
                element: <Carreras />
            },
            {
                path: '/profile',
                element: <Profile />
            },]
    },

]);