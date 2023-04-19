import Hero from "@/components/hero";
import Banner from "@/components/banner";
import ProductCard from "@/components/productCard";
import { urlFor, client } from "@/lib/client";
export default function Home({ products }) {
    const newProduct = products.slice(0, products.length / 2);
    console.log(products);
    return (
        <div className="container">
            <Hero products={products} />
            <div className="products_wrapper">
                {/*Products are to be dynamic*/}
                {newProduct?.map((product) => {
                    return <ProductCard key={product._id} products={product} />;
                })}
            </div>
            <Banner />
        </div>
    );
}

export const getServerSideProps = async () => {
    const query = `*[_type=='products']`;
    const products = await client.fetch(query);
    return {
        props: {
            products,
        },
    };
};
