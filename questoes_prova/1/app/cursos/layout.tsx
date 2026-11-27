import SideBarCursos from "./components/sidebar";
import type { ReactNode } from "react";

export default function LayoutPaiCursos({children}:{ children: ReactNode }){
    return (
    <div style={{display: "flex", minHeight: "100vh"}}>
        <SideBarCursos/>
        <main style={{ flex: 1, padding: "1.5rem" }}>{children}</main>
    </div>)
}