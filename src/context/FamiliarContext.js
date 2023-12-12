"use client"
import React, { createContext, useState, useEffect } from "react";

export const FamiliarContext = createContext();

export const FamiliarProvider = ({ children }) => {
  const [familiares, setFamiliares] = useState([]);

  const agregarFamiliar = (nuevoFamiliar) => {
    setFamiliares([...familiares, nuevoFamiliar]);
  };

  const eliminarFamiliar = (index) => {
    const updatedFamiliares = familiares.filter((_, i) => i !== index);
    setFamiliares(updatedFamiliares);
  };

  return (
    <FamiliarContext.Provider value={{ familiares, agregarFamiliar, eliminarFamiliar }}>
      {children}
    </FamiliarContext.Provider>
  );
};