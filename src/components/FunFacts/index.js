import React from "react";
import { ReactComponent as MapAfricaSVG } from "../../images/map-of-africa.svg";
import { ReactComponent as ToneSVG } from "../../images/tone(1).svg";
import { ReactComponent as TwinSVG } from "../../images/twins(1).svg";
import {
  FunFactsContainer,
  FunFactsH1,
  FunFactsCard,
  FunFactsH2,
  FunFactsIcon,
  FunFactsP,
  FunFactsWrapper,
  FunFactsSVGIcon,
} from "./FunFactsElements";

const FunFacts = () => {
  return (
    <FunFactsContainer id="fun-facts">
      <FunFactsH1>Fun Facts</FunFactsH1>
      <FunFactsWrapper>
        <FunFactsCard>
          <FunFactsSVGIcon>
            <MapAfricaSVG />
          </FunFactsSVGIcon>
          <FunFactsH2>Origins</FunFactsH2>
          <FunFactsP>
            The Yoruba people reside mainly in southwest Nigeria, Benin, and
            Togo, making them one of Africa's largest ethnic groups with 20-40
            million people.
          </FunFactsP>
        </FunFactsCard>
        <FunFactsCard>
          <FunFactsSVGIcon>
            <ToneSVG />
          </FunFactsSVGIcon>
          <FunFactsH2>Tonal language</FunFactsH2>
          <FunFactsP>
            Yoruba is a tonal language with three basic tones (high, mid, and
            low), where the meaning of a word can change depending on tone.
          </FunFactsP>
        </FunFactsCard>
        <FunFactsCard>
          <FunFactsSVGIcon>
            <TwinSVG />
          </FunFactsSVGIcon>
          <FunFactsH2>Twins</FunFactsH2>
          <FunFactsP>
            Yoruba has one of the highest twin birth rates in the world, with
            some studies showing 45-50 per 1,000 live births, compared to the
            global average of 12-16.
          </FunFactsP>
        </FunFactsCard>
      </FunFactsWrapper>
    </FunFactsContainer>
  );
};

export default FunFacts;
