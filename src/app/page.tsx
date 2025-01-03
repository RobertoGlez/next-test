"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Hola, {session.user?.name}</p>
        <button onClick={() => signOut()} className="btn">
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()} className="btn">
      Iniciar sesión
    </button>
  );
}
