import { client } from "../../lib/contentful/client";
import CarouselCL from "./CarouselCS";

const cleanUpData = (rawData) => {
  const cleanData = rawData.map((slide) => {
    const { sys, fields } = slide;
    const { id } = sys;
    const slideTitle = fields.title;
    const slideDescription = fields.description;
    const slideImage = fields.image.fields.file.url;
    const updatedSlide = { id, slideTitle, slideDescription, slideImage };
    return updatedSlide;
  });
  return cleanData;
};

const getData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "carousel",
    });
    const responseData = response.items;
    if (responseData) {
      cleanUpData(responseData);
      const cleanedData = cleanUpData(responseData);
      return cleanedData;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default async function Carousel() {
  const data = await getData();
  return (
    <>
      <CarouselCL data={data} />
    </>
  );
}
