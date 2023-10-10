import { useFormik } from "formik";

export default function NuevoCliente() {
    const formik = useFormik({
        initialValues: {
            carnet: '',
            password: ''
        },
        obSubmit: valores => {
            console.log(valores);
        }
    });


    return (
        <div className="p-10">
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">Inicia Sesión</h1>
                    <form className="space-y-4"
                        onSubmit={formik.handleSubmit}
                    >
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Carnet UDB</span>
                            </label>
                            <input type="text"
                                placeholder="Carnet UDB"
                                className="w-full input input-bordered"
                                value={formik.values.carnet}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Contraseña</span>
                            </label>
                            <input type="password" placeholder="Ingresa tu contraseña"
                                className="w-full input input-bordered"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div>
                            <button className="btn btn-block" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}