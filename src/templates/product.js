import React from "react";
import styled from "styled-components";
import useStore from "../context/StoreContext";
import useInput from "../utils/useInput";
import { graphql } from "gatsby";

import LayoutAlt from "../components/LayoutAlt";
import SecondaryButton from "../components/SecondaryButton";
import ProductCard from "../components/ProductCard";
import Seo from "../components/seo";


const ProductTemplate = ({ pageContext, data }) => {
  const { product } = pageContext;
  const { addVariantToCart } = useStore();
  const bind = useInput(1);
  const { nodes } = data.allShopifyProduct;


  return (
    <LayoutAlt>
      <Seo title={ product.title } />
      <Wrapper>
        <Image src={product.featuredImage.src} alt="{product.altText}" />
        <InfoContainer>
          <Vendor>{product.vendor}</Vendor>
          <Title>{product.title}</Title>
          <DetailsContainer>
            <Subtitle>
              {product.priceRangeV2.maxVariantPrice.amount} DKK
            </Subtitle>
            <PurchaseContainer>
              <InputForm>
                <Subtitle>
                  <label htmlFor="qty"></label>
                </Subtitle>
                <Input placeholder="1" id="qty" type="number" {...bind} />
              </InputForm>
              <SecondaryButton
                text="Add to cart"
                onClick={() => addVariantToCart(product, bind.value)}
              />
            </PurchaseContainer>
          </DetailsContainer>
          <Description>{product.description}</Description>
        </InfoContainer>
      </Wrapper>

      <TitleContainer>
        <Headline>You may also like...</Headline>
      </TitleContainer>
      <ProductWrapper>
        {nodes?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductWrapper>
    </LayoutAlt>
  );
};

export default ProductTemplate;


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
  margin: 0 3rem 4rem;
  display: grid;
  grid-template-columns: 50% 45%;
  gap: 5%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
  p {
    margin: auto 0;
  }
`;

const Vendor = styled.h4`
  margin: 0;
  font-weight: 200;
  font-size: 16px;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem;
  font-size: 40px;
`;

const Headline = styled.h4`
  margin: 1rem 0 2rem;
  font-size: 32px;
`;

const Subtitle = styled.p`
  max-width: 500px;
  font-weight: 200;
  font-size: 24px;
`;

const Description = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.5;
`;

const DetailsContainer = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 4rem;
`;

const PurchaseContainer = styled.p`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const InputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: fit-content;
  gap: 20px;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 1px solid rgba(255, 82, 2, 0.5);
  padding: 10px 20px;
  max-width: 80px;
  font-size: 12px;
  :focus {
    outline: none;
    outline-color: #014c40;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  margin: 1rem 3rem;
  justify-content: space-between;
  gap: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
