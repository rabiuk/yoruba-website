import { SlideWrap } from "./CarouselElements";
import Image from "next/legacy/image";
const CarouselSlide = (props) => {
  // const { id, slideImage, slideTitle, slideDescription } = props;
  const { slideImage, slideTitle } = props;
  return (
    <SlideWrap
      className="slideWrap"
      // style={{ backgroundImage: `url(${slideImage})` }}
    >
      <Image
        src={slideImage}
        alt={slideTitle}
        layout="fill"
        priority={true}
        // width={500}
        // height={500}
      />
      {/* <TextWrap className="textWrap">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
      </TextWrap> */}
    </SlideWrap>
  );
};

export default CarouselSlide;
