import {lazy} from "react";

// export  const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(()=> res(import("./AboutPage")), 1500)
}))