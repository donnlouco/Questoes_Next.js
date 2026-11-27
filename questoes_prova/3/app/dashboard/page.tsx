import SkeletonEvasao from "./components/Skeleton";
import BlocoA from "./components/BlocoA";
import BlocoB from "./components/BlocoB";
import { Suspense } from "react";

export default function DashboardPage(){
    return(
        <main style={{padding: 24, display: "grid", gap: 16}}>
            <h1>Dashboard Analitico Academico</h1>
            <BlocoA/>

            <Suspense fallback={<SkeletonEvasao/>}>
                <BlocoB/>
            </Suspense>
        </main>
    )
}