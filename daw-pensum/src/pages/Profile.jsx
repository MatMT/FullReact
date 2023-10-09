import React from "react";

//Imagenes
import DefaultPfp from "/src/assets/img/DefaultPfp.jpg";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[4rem] text-black">
        <h1 className="mb-5 text-5xl font-bold">Universidad Don Bosco</h1>
        <p className="mb-5 text-xl">La Universidad de las Generaciones</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-[1rem] text-black">
        <div className="avatar items-center justify-center">
          <div className="w-5/6 rounded-full">
            <img src={DefaultPfp} />
          </div>
        </div>

        <div className="flex flex-col w-full px-[20rem] mt-4">
          <div className="bg-zinc-100 rounded-lg p-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Nombre:</h2>
              <p>Floppa Ramirez</p>
            </div>
            <div className="divider"></div> 
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Carnet:</h2>
              <p>CM232707</p>
            </div>
            <div className="divider"></div> 
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Carrera:</h2>
              <p>Tecnico en Ciencias de la Computación</p>
            </div>
            <div className="divider"></div> 
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Materias Inscritas:</h2>
              <ul>
                <li>Calculo Integral (CAI)</li>
                <li>Matematica Discreta (MAD)</li>
                <li>Desarrollo de Aplicaciones Web (DAW)</li>
              </ul>
            </div>
          </div>

          <div className="flex w-full justify-center mt-[3rem]">
            <button className="btn bg-blue-900">Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </>
  );
}
