"use client";

import { NavMenu } from "@/components/nav/Nav";
import TaskPage from "@/components/pages/task";
import store from "@/store";
import { useSession } from "next-auth/react";
import { Provider } from "react-redux";


export default function Home() {
  const { data: session } = useSession();

  return (
    <Provider store={store}>
      <div>
        <NavMenu />
        {session && <TaskPage/>}
        {!session && <div style={{
          display:'flex',
          width:'100%',
          padding:'15px',
          boxSizing:'border-box',
        }}>Es nesesario iniciar session para administrar el listado</div>}
      </div>
    </Provider>
   
  );
}
