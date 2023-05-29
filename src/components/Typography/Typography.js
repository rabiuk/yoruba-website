import styled from "styled-components";
import { colors } from "@/components/colors";

export const H1 = styled.h1`
  font-size: 3.6rem; // scaled down from 4rem
  margin-bottom: 0.9rem; // scaled down from 1rem
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : colors.textColor};
  @media (max-width: 768px) {
    font-size: 2.7rem; // scaled down from 3rem
  }
`;

export const H2 = styled.h2`
  font-size: 2.7rem; // scaled down from 3rem
  margin-bottom: 0.9rem; // scaled down from 1rem
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : colors.textColor};
  @media (max-width: 768px) {
    font-size: 2.25rem; // scaled down from 2.5rem
  }
`;

export const H3 = styled.h3`
  font-size: 2.16rem; // scaled down from 2.4rem
  margin-bottom: 0.9rem; // scaled down from 1rem
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : colors.textColor};
  @media (max-width: 768px) {
    font-size: 1.8rem; // scaled down from 2rem
  }
`;

export const P = styled.p`
  font-size: ${({ large }) => (large ? "2.25rem" : "1.8rem")};
  line-height: 1.8; // scaled down from 2
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : colors.textColor};
  @media (max-width: 768px) {
    font-size: ${({ large }) =>
      large ? "1.8rem" : "1.575rem"}; // scaled down from "2rem" and "1.75rem"
  }
`;

export const Span = styled.span`
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : colors.textColor};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const LineBreak = styled.div`
  height: 1.35rem; // scaled down from 1.5rem
`;
