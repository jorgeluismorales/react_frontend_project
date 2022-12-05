import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactStarRating from "react-star-ratings-component";

const RatingMovie = ({ type, id }) => {

    const {t} = useTranslation();

    const [ratingSend, setRatingSend] = useState(false);

    const rate = async ( rating ) => {
        await axios.post(`https://api.themoviedb.org/3/${type}/${id}/rating?api_key=2508dee2967eb61f3c6a05ef9df2826a`, {
            value: rating
        })
    }



    return (
        <>
            <ReactStarRating
                numberOfStar={10}
                numberOfSelectedStar={0}
                colorFilledStar="red"
                colorEmptyStar="black"
                starSize="40px"
                spaceBetweenStar="15px"
                disableOnSelect={ratingSend}
                onSelectStar={rating => {
                    rate(rating);
                    setRatingSend(true);
                }}
            />
            {ratingSend && <p>{t("rating")}</p>}
        </>
    )
}

export default RatingMovie