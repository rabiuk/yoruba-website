// carouselData.ts
export interface Slide {
  id: number;
  slideTitle: string;
  slideDescription: string;
  slideImage: string;
}

const carouselData: Slide[] = [
    {
      id: 1,
      slideTitle: "Slide 1",
      slideDescription: "Lanscape View",
      slideImage: "/images/carousel/landscape_view.png",
    },
    {
      id: 2,
      slideTitle: "Slide 2",
      slideDescription: "Man Playing the drums",
      slideImage: "/images/carousel/man_playing_drums.png",
    },
    {
      id: 3,
      slideTitle: "Slide 3",
      slideDescription: "Twins Sculpture",
      slideImage: "/images/carousel/twins_sculpture.png",
    },
  ];
  
  export default carouselData;
  