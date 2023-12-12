"use client";
import React, { useContext } from "react";
import { FamiliarContext } from "../../context/FamiliarContext";
import Link from "next/link";

const OtroComponente = () => {
  const { familiares, eliminarFamiliar } = useContext(FamiliarContext);

  const handleEliminar = (index) => {
    eliminarFamiliar(index);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Miembros de la familia</h2>
      <div className="row">
        {familiares.map((familiar, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{familiar.nombre}</h5>
                <p className="card-text">
                  <strong>Edad:</strong> {familiar.edad}
                </p>
                <p className="card-text">
                  <strong>Estado:</strong> {familiar.estado}
                </p>
                <p className="card-text">
                  <strong>Municipio:</strong> {familiar.municipio}
                </p>
                <button
                  onClick={() => handleEliminar(index)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/"}>
        <button className="btn btn-lg btn-primary">Regresar</button>
      </Link>
    </div>
  );
};

export default OtroComponente;
