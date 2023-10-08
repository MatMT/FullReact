import React from "react";

//Imagenes
import BannerMain from "/src/assets/img/bannerMain.jpg";

export default function Main() {
  return (
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
  );
}
