import { useEffect, useState } from "react";
import "./Homepage.css"
import Carousel from "../../components/Carousel/Carousel";
import SelectProfile from "../../components/SelectProfile/SelectProfile";
import Separator from "../../components/Separator/Separator"

const HomePage = () => {

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const modal = localStorage.getItem("modal");
    if (modal === "false") {
      setShowModal(false);
    }
  }, []);


  return (
    <>
      {/* {
        showModal && <SelectProfile setShowModal={setShowModal} />
      } */}

      <Separator height={"40px"} />
      <Carousel
        entity={"movie"}
        state={"popular"}
        language={"spanish"}
        title={"Peliculas populares"}
      />

      <Separator height={"40px"} />
      <Carousel
        entity={"series"}
        state={"popular"}
        language={"spanish"}
        title={"Series Populares"}
      />

<Separator height={"40px"} />
      <Carousel
        entity={"movie"}
        state={"topRated"}
        language={"spanish"}
        title={"Peliculas mejor valoradas"}
      />

<Separator height={"40px"} />
      <Carousel
        entity={"series"}
        state={"topRated"}
        language={"spanish"}
        title={"Series mejor valoradas"}
      />

    </>
  )

};

export default HomePage;
