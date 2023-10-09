import React from "react";

//Imagenes
import BannerMain from "/src/assets/img/bannerMain.jpg";

export default function Carreras() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[4rem] text-black">
        <h1 className="mb-5 text-5xl font-bold">Universidad Don Bosco</h1>
        <p className="mb-5 text-xl">La Universidad de las Generaciones</p>
      </div>

      <div className="flex w-full mt-[4rem] pl-8">
        <h1 className="text-3xl font-bold text-black">Carreras Registradas</h1>
      </div>

      <div className="flex w-full mt-[4rem] pl-8">
        <h1 className="text-2xl font-bold text-black">Ingenierías</h1>
      </div>

      <div className="flex w-full mt-4">
        <div className="flex w-[30rem] h-[16rem] ml-[2rem] bg-slate-500">
          Ing. Ciencias de la Computación
        </div>
        <div className="flex w-[30rem] h-[16rem] ml-[2rem] bg-slate-500">
          Ing. Aeronáutica
        </div>
      </div>

      <div className="flex w-full mt-[4rem] pl-8">
        <h1 className="text-2xl font-bold text-black">Técnicos</h1>
      </div>

      <div className="flex w-full mt-4">
        <div className="flex w-[30rem] h-[16rem] ml-[2rem] bg-slate-500">
        Técnico en Ingeniería en Computación
        </div>
        <div className="flex w-[30rem] h-[16rem] ml-[2rem] bg-slate-500">
        Técnico en Mantenimiento Aeronáutico
        </div>
      </div>
    </>
  );
}
