import { SlideWrap, TextWrap } from "./CarouselElements";
const CarouselSlide = (props) => {
  const { id, slideImage, slideTitle, slideDescription } = props;
  return (
    <SlideWrap
      className="slideWrap"
      style={{ backgroundImage: `url(${slideImage})` }}
    >
      <TextWrap className="textWrap">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
      </TextWrap>
    </SlideWrap>
  );
};

export default CarouselSlide;
