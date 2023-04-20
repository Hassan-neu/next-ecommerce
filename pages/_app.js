import Layout from "@/components/layout";
import "@/styles/globals.css";
import { StateContext } from "@/hooks/context";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Toaster />
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}
