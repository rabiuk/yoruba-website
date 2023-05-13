import "server-only";
import { client } from "../../lib/contentful/client";

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

export const getData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "carousel",
    });
    const responseData = response.items;
    console.log("responseData", responseData);

    if (responseData) {
      cleanUpData(responseData);
      const cleanedData = cleanUpData(responseData);
      return cleanedData;
    } else {
      console.log("No data");
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};
