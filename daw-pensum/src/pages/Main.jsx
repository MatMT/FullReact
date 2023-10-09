import React from "react";

//Imagenes
import BannerMain from "/src/assets/img/bannerMain.jpg";

export default function Main() {
  return (
    <>
      <div
        className="hero h-[30rem]"
        style={{
          backgroundImage: `url(${BannerMain})`, // Establece la URL de la imagen de fondo
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Universidad Don Bosco</h1>
            <p className="mb-5 text-xl">La Universidad de las Generaciones</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-black mx-[2rem] md:mx-[10rem] mt-[3rem]">
        <p className="mb-5 text-2xl justify-center text-center">
          Registrate o Inicia Sesión para ver tu Listado de Carreras y su
          respectivo Pénsum, así como tambien inscribir tus materias.
        </p>
      </div>

      <div className="flex w-full justify-center mt-[3rem]">
        <button className="btn bg-blue-900 text-white">Iniciar Sesión</button>
      </div>

      <div className="flex w-full pr-[2rem] items-center justify-center text-black mt-[3rem]">
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Investigacion 2</h1>
        <h1 className="text-2xl font-bold">DAW 2023</h1>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-col">
          <ul>
            <h1 className="text-2xl font-bold mb-2">Integrantes</h1>
            <li>- Marcelo Cruz</li>
            <li>- Mateo Elias</li>
            <li>- Eleazar Amaya</li>
            <li>- Victor Garcia</li>
            <li>- Oscar Arce</li>
          </ul>
        </div>
      </div>
    </>
  );
}
