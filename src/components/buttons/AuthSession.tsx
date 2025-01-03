"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function AuthButton() {
  const { data: session } = useSession();
  const buttonStyle: React.CSSProperties = {
    padding:'8px',
    boxSizing:'border-box',
    background:'whitesmoke',
    borderRadius:'10px',
    color:'black'
  }
  if(session){
    return (<div>
      <button onClick={() => signOut()} className="btn" style={buttonStyle}>
        Cerrar sesion
      </button>
  </div>)
  }
 
  return (
    <button onClick={() => signIn()} className="btn" style={buttonStyle}>
      Iniciar sesión
    </button>
  );
}
