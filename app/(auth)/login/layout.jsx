import { Suspense } from "react";
import page from './page'
import loading from './loading'
export default function layout({children}){
    return(
        <Suspense fallback={<loading />}>
            {children}
        </Suspense>
    )
}