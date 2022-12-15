import React from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import useApi from "../../hooks/useApi";
import Card from "../Card/Card";
import { settingsSlider } from "./settings";

const Carousel = ({ entity, state, language, title, type }) => {
  const [values] = useApi(entity, state, language);

  return (
    <>
      <div>
        <h1
          style={{
            color: "black",
          }}
        >
          {title}
        </h1>
      </div>
      <Slider {...settingsSlider}>
        {values?.map((value) => (
          <Link to={`/${type}/` + value.id}>
            <Card
              key={value.id}
              title={value.title || value.name}
              imgPath={value.backdrop_path}
            />
            </Link>
          ))
        }
      </Slider>
    </>
  );
};

export default Carousel;
