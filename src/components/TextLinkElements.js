import styled from "styled-components";
// import { Link } from "react-scroll";
// import { ImproveSkillsLi } from "./ImproveSkills/ImproveSkillsElements";

import { Link as LinkR } from "react-router-dom";

export const TextLink = styled(LinkR)`
  margin: 0px;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
