import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layaout() {
    const location = useLocation();

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-slate-900 px-5 py-10'>
                <h2 className='text-3xl font-black text-center text-white'> DAW404 | Pensum UDB</h2>

                <nav className='mt-12 grid font-semibold gap-2 text-2xl text-white'>
                    <Link
                        to="/main"
                        className={`p-2 ${location.pathname === '/main' ? 'seccionActual' : ''}`}>
                        Main
                    </Link>
                    <Link
                        to="/clientes/nuevo"
                        className={`p-2 ${location.pathname === '/clientes/nuevo' ? 'seccionActual' : ''}`}>
                        Iniciar Sesión
                    </Link>
                    <Link
                        to="/"
                        className={`p-2 ${location.pathname === '/' ? 'seccionActual' : ''}`}>
                        Carreras
                    </Link>
                    <Link
                        to="/profile"
                        className={`p-2 ${location.pathname === '/profile' ? 'seccionActual' : ''}`}>
                        Perfil
                    </Link>
                    
                </nav>
            </aside>

            <main className='md:w-3/4 p-0 md:h-screen overflow-y-scroll'>
                <Outlet />
            </main>
        </div>
    )
}
