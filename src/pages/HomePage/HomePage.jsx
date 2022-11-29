import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Separator from "../../components/Separator/Separator"
import apiNetflix  from "../../utils/endPointApi";

const HomePage = () => {


  return (
    <>
  <Separator height={"60px"} />
      <Carousel
        entity={apiNetflix.entity.movie}
        title={"Peliculas populares"}
      />
  <div>HomePage</div>
  </>
  )

};

export default HomePage;
