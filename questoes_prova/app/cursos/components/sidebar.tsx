"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CURSOS } from "@/app/lib/cursos";

export default function sideBarCursos(){
    const[expandido, setExpandido] = useState(true);
    const pathname = usePathname();

    
}
