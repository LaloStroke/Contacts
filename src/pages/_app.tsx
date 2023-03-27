import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <div className="pageContainer">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
