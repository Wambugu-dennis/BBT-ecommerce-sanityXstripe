import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'bfnkuyt5',
    dataset:'production',
    apiVersion:'2023-01-27',
    useCdn: true,
    token: "process.evn.NEXT_PUBLIC_SANITY_TOKEN"
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);