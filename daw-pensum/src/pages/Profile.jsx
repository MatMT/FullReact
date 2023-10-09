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

      <div className="flex items-center justify-center mt-[1rem] py-[1rem] mx-[8rem] px-[0rem] gap-[2rem] rounded-xl drop-shadow-lg border-2 bg-zinc-50  text-black">
        <div className="avatar flex flex-col pl-[2rem] pr-[1rem] items-center justify-center">
          <div className="w-6/6 rounded-full">
            <img src={DefaultPfp} />
          </div>
          <h1 className="text-xl mt-2 font-semibold text-black">Floppa Ramirez</h1>
        </div>

        <div className="flex px-[0rem] my-4">
          <div className="flex w-1/2">
            <div className="rounded-lg p-2 flex flex-col">
              <div className="mb-0">
                <h2 className="text-xl font-semibold">Nombre:</h2>
                <p>Floppa Ramirez</p>
              </div>
              <div className="divider"></div>
              <div className="mb-0">
                <h2 className="text-xl font-semibold">Carnet:</h2>
                <p>CM232707</p>
              </div>
              <div className="divider"></div>
              <div className="mb-0">
                <h2 className="text-xl font-semibold">Carrera:</h2>
                <p>Técnico en Ciencias de la Computación</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="rounded-lg p-4 flex flex-col">
            <div className="mb-0">
                <h2 className="text-xl font-semibold">Materias Inscritas:</h2>
                <ul>
                <div className="divider py-0"></div>
                  <li>Calculo Integral (CAI)</li>
                  <div className="divider"></div>
                  <li>Matemática Discreta (MAD)</li>
                  <div className="divider"></div>
                  <li>Desarrollo de Aplicaciones Web (DAW)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[3rem]">
        <button className="btn bg-blue-900 text-white">Cerrar Sesión</button>
      </div>
    </>
  );
}
