import styled from "styled-components";

export const RelatedPin = styled.h3`
   margin: 18px auto;
   text-align: center;
   font-size: 24px;
   font-weight: 700;
`;

export const ImgWrapper = styled.div`
   margin: 0 auto;
   max-width: 1440px;
   column-count: 4;
   column-gap: 1em;
`;

export const PinItem = styled.article`
   display: inline-flex;
   width: 100%;
   margin-bottom: 1rem;
   border-radius: 24px;
   overflow: hidden;
`;

export const PinImg = styled.img`
   width: 100%;
   height: auto;
   object-fit: cover;
`;
