import Layout from "@/components/layout";
import "@/styles/globals.css";
import { StateContext } from "@/hooks/context";
export default function App({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}
