import React from 'react'
import { navigate } from "gatsby-link";
import useStore from "../context/StoreContext";
import styled from "styled-components";


const ProductCard = ({ product }) => {
    const { addVariantToCart } = useStore()

    return (
      <Wrapper>
        <AddButton onClick={() => addVariantToCart(product, 1)}>
          <p>+</p>
        </AddButton>
        <ContentWrapper onClick={() => navigate(`/products/${product.handle}`)}>
          <Image src={product.featuredImage.src} alt="{product.altText}" />
          <TextWrapper>
            <Title>{product.title}</Title>
            <DetailWrapper>
              <Price>{product.priceRangeV2.maxVariantPrice.amount} DKK</Price>
              <Vendor>{product.vendor}</Vendor>
            </DetailWrapper>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    );
}

export default ProductCard

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 20rem;
  top: 0px;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const ContentWrapper = styled.div`
  height: 28rem;
`;

const Image = styled.img`
  width: 20rem;
  top: 0;
  object-fit: cover;
  margin: 0;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 0;
  width: 20rem;
`;

const DetailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 600;
  margin: 0;
  color: #111111;
  width: 8rem;
  line-height: 2rem;
`;

const Price = styled.p`
  font-weight: normal;
  margin: 0;
  padding: 0.5rem 0;
`;

const Vendor = styled.p`
  font-weight: normal;
  margin: 0;
`;

const AddButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid #fff;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    transition: 0.2s;
    background: #fff;
  }

  p {
    margin: 0;
    color: #fff;
    font-weight: bold;

    :hover {
      color: #FF5802
    }
  }
`;