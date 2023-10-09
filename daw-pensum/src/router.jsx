import { createBrowserRouter } from 'react-router-dom';
// Componentes
import Layaout from './components/Layaout';
import NuevoCliente from './pages/NuevoCliente';
import Main from './pages/Main';
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
                element: <NuevoCliente />
            },
            {
                path: '/main',
                element: <Main />
            },
            {
                path: '/profile',
                element: <Profile />
            },]
    },
    
]);