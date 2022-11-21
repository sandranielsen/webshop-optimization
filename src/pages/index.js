import * as React from "react";
import { navigate } from "gatsby-link";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import PrimaryButton from "../components/PrimaryButton";
import ProductCard from "../components/ProductCard";

import Seo from "../components/seo";
import BannerImg from "../images/banner-beachy-top-desktop.jpg";

const IndexPage = ({ data }) => {
  const { nodes } = data.allShopifyProduct;

  return (
    <Layout>
      <Seo title="MagoMade" />
      <ContentWrapper>
        <Overlay></Overlay>
        <BannerImage src={BannerImg} />
        <TextWrapper>
          <Subtitle>New</Subtitle>
          <Title>Beachy Top Pattern</Title>
          <ButtonWrapper>
            <PrimaryButton
              text="Find patterns"
              onClick={() => navigate("products")}
            />
          </ButtonWrapper>
        </TextWrapper>
      </ContentWrapper>

      <ContentWrapper>
        <Headline>Patterns</Headline>
        <ProductWrapper>
          {nodes?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductWrapper>
      </ContentWrapper>
    </Layout>
  );};

export default IndexPage;


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

const ContentWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 2; 
`;

const BannerImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  margin: 0;

`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 3rem;
  display: grid;
  gap: 1rem;
  z-index: 3;
  width: 24rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 1rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  margin: 1rem 4rem;
  justify-content: space-between;
  gap: 40px;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 56px;
  font-family: HelveticaNeue;
  font-style: italic;
  font-weight: 900;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const Headline = styled.h2`
  color: #111111;
  font-size: 32px;
  text-transform: uppercase;
  margin: 6rem 2rem 3rem;
  display: flex;
  justify-content: center;
`;
