import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layaout() {
    const location = useLocation();

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

                <nav className='mt-12 grid font-semibold gap-2 text-2xl text-white'>
                    <Link
                        to="/"
                        className={`p-2 ${location.pathname === '/' ? 'seccionActual' : ''}`}>
                        Cliente
                    </Link>
                    <Link
                        to="/clientes/nuevo"
                        className={`p-2 ${location.pathname === '/clientes/nuevo' ? 'seccionActual' : ''}`}>
                        Nuevo Cliente
                    </Link>
                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
                <Outlet />
            </main>
        </div>
    )
}
