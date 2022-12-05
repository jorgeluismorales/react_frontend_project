import { useEffect, useState } from "react";
import axios from "axios";
import { createSearchParams, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
const PAGE_NUMBER = 1;

const MoviesGridPage = () => {

    const { t } = useTranslation();
    //USAR ESTE ENDPOINT PARA BUSCAR PELICULAS https://api.themoviedb.org/3/search/movie?api_key=2508dee2967eb61f3c6a05ef9df2826a&language=en-US&query=batman&page=1

    const [data, setData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useSearchParams();
    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=2508dee2967eb61f3c6a05ef9df2826a&language=en-US&page=${page}`
            );

            setData((prev) => {
                return [...prev, ...response.data.results];
            });
            setLoading(false);
        }, 1500);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className="container">
            <input
                type="text"
                placeholder={t("searchMovie")}
                onChange={(e) => { setSearch(createSearchParams({ query: e.target.value })) }}
                value={search.get("query")}
            />
            <MoviesGrid data={data} />
            {loading && <Loader />}
        </div>
    )
}

export default MoviesGridPage