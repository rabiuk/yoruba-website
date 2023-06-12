import styled from "styled-components";
import { colors } from "@/components/colors";

export const H1 = styled.h1`
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "32px"};
  margin-bottom: 8px;
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : props.lightText
      ? colors.lightTextColor
      : colors.textColor};
`;

export const H2 = styled.h2`
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "24px"};
  margin-bottom: 8px;
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : props.lightText
      ? colors.lightTextColor
      : colors.textColor};
`;

export const H3 = styled.h3`
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "19.2px"};
  margin-bottom: 8px;
  font-weight: ${(props) => props.fontWeight || 900};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : props.lightText
      ? colors.lightTextColor
      : colors.textColor};
`;

export const P = styled.p`
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "16px"};
  line-height: 1.6;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : props.lightText
      ? colors.lightTextColor
      : colors.textColor};
`;

export const Span = styled.span`
  font-size: ${({ fontSize }) =>
    fontSize
      ? `clamp(${parseFloat(fontSize) * 0.8}px, ${
          parseFloat(fontSize) / 100
        }vw + ${parseFloat(fontSize) * 0.8}px, ${fontSize}px)`
      : "16px"};
  color: ${(props) =>
    props.primary
      ? colors.primaryColor
      : props.secondary
      ? colors.secondaryColor
      : props.lightText
      ? colors.lightTextColor
      : colors.textColor};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const LineBreak = styled.div`
  height: 12px;
`;
