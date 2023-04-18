import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "dtglb7rk",
    dataset: "production",
    apiVersion: "2023-04-17",
    useCdn: true,
    token: process.env.SANITY_NEXT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
