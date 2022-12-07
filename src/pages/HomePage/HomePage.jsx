import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Separator from "../../components/Separator/Separator"

const HomePage = () => {


  return (
    <>
  <Separator height={"60px"} />
      <Carousel
        entity={"movie"}
        title={"Peliculas populares"}
      />
        <Separator height={"60px"} />
      <Carousel
        entity={"series"}
        title={"Series Populares"}
      />
  <div>HomePage</div>
  </>
  )

};

export default HomePage;
