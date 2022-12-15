import { useEffect, useState } from "react";
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
      {
        showModal && <SelectProfile setShowModal={setShowModal} />
      }
    </>
  )

};

export default HomePage;
