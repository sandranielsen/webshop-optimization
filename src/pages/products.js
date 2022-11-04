import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

import LayoutAlt from "../components/LayoutAlt";
import Seo from "../components/seo";
import ProductCard from "../components/ProductCard"


const Products = ({ data }) => {
  const { nodes } = data.allShopifyProduct
  

    return (
      <LayoutAlt>
        <Seo title="Produkter | MagoMade" />
        <Banner>
          <Title>Produkter</Title>
        </Banner>

        <Wrapper>
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Wrapper>
      </LayoutAlt>
    );
}

export default Products

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        handle
        variants {
          shopifyId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        featuredImage {
          src
          altText
        }
        vendor
        media {
          preview {
            image {
              src
              altText
            }
          }
        }
      }
    }
  }
`;



const Wrapper = styled.div`
  display: grid;
  position: relative;
  padding: 0 3rem;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
`;

const Banner = styled.div`
  width: 100%;
  background-size: cover;
  background: linear-gradient(
    333deg,
    rgba(255, 88, 2, 1) 0%,
    rgba(244, 187, 248, 1) 32%,
    rgba(246, 220, 248, 1) 47%,
    rgba(247, 169, 128, 1) 100%
  );
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  margin: 0;
  padding: 6rem;
  max-height: 30rem;
  font-size: 32px;
`;