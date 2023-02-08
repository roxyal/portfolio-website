import '@/styles/globals.css'
import dynamic from "next/dynamic";
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default dynamic (() => Promise.resolve(App), {ssr: false})