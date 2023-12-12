"use client";
import React, { useContext, useState } from "react";
import EstadosMexico from "../estados";
import { useRouter } from "next/navigation";
import { FamiliarContext } from "../context/FamiliarContext";

const SelectEstados = () => {  const router = useRouter();
  const { agregarFamiliar } = useContext(FamiliarContext);

  const [estadoSeleccionado, setEstadoSeleccionado] = useState({});
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [nucleo, setNucleo] = useState("");

  const handleChange = (event) => {
    const estadoSeleccionado = EstadosMexico[event.target.value];
    setEstadoSeleccionado({
      nombre: event.target.value,
      municipios: estadoSeleccionado,
    });
    setMunicipioSeleccionado("");
  };

  const handleMunicipioChange = (event) => {
    setMunicipioSeleccionado(event.target.value);
  };

  const enviarDatos = (e) => {
    e.preventDefault();

   
    if (!nombre || !edad || !estadoSeleccionado.nombre || !municipioSeleccionado) {
      alert("Por favor, complete todos los campos");
      return;
    }

  
    agregarFamiliar({
      nombre,
      edad,
      estado: estadoSeleccionado.nombre,
      municipio: municipioSeleccionado,
    });

    router.push("./familia");
  };
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>Agregar familiar</h2>
        <form onSubmit={enviarDatos} className="w-100">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Nombre completo</label>
              <input
                placeholder="Nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Edad</label>
              <input
                placeholder="Edad"
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Nucleo familiar</label>
              <input
                placeholder="Cónyuge"
                type="text"
                value={nucleo}
                onChange={(e) => setNucleo(e.target.value)}
                className="form-control mb-2"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Selecciona un estado de México
              </label>
              <select className="form-select mb-2" onChange={handleChange}>
                <option>Selecciona un estado</option>
                {Object.keys(EstadosMexico).map((estado, index) => (
                  <option key={index} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Seleccione un municipio</label>
              <select
                className="form-select mb-2"
                onChange={handleMunicipioChange}
              >
                <option>Selecciona un municipio</option>
                {estadoSeleccionado?.municipios?.map((municipio, index) => (
                  <option key={index} value={municipio}>
                    {municipio}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-lg btn-primary" type="submit">
              Agregar Movimiento
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SelectEstados;
