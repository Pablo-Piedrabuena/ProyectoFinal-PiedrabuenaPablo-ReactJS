import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

/* const usuario={
    idUsuario:123456,
    nombre: "ProfesorTutor",
    apellido: "CoderHouse",
    dni: "123456"

} */
const usuario={
    idUsuario:565688,
    nombre: "Pablo",
    apellido: "Piedrabuena",
    dni: "36105281"

}
/* let carrito = []; */
/* let carrito = JSON.parse(localStorage.getItem("carrito")) || [] */
const UserContextProvider = ({ children }) => {
    
    const value = {usuario}

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
        );
};

export default UserContextProvider;