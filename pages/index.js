import React from 'react';
import {client} from '..lib/client';
import{ Product, FooterBanner, HeroBanner} from '..Components';

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Crotchets of many Variations</p>
      </div>

      <div className="products-container"> 
        {products?.map((product) => <Product key=
        {product._id} product={product} /> )}
      </div>

      <FooterBanner FooterBanner={bannerData && bannerData[0]}
      />
    </>
  )
};
// server side props
export const getServerSideProps = async () => {
  const query = '*[_type == "product"';
  const products = await client.fetch(query);

  const bannerquery = '*[_type == "banner"';
  const bannerData = await client.fetch(bannerquery);

  return{
    props: { products, bannerData }

  }
}

export default Home