import axios from "axios";
import apiNetflix from "../utils/endPointApi";

const apiBuilder = {
    tryGetPopularMovies: async (entity,  page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity[entity]}${apiNetflix.state.popular}${apiNetflix.access.apiKey}${apiNetflix.language.spanish}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetTopRatedMovies: async (language, page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity.movie}${apiNetflix.state.topRated}${apiNetflix.access.apiKey}${apiNetflix.language[language]}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetLatestMovies: async (language, page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity.movie}${apiNetflix.state.latest}${apiNetflix.access.apiKey}${apiNetflix.language[language]}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetPopularSeries: async (language, page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity.series}${apiNetflix.state.popular}${apiNetflix.access.apiKey}${apiNetflix.language[language]}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetTopRatedSeries: async (language, page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity.series}${apiNetflix.state.topRated}${apiNetflix.access.apiKey}${apiNetflix.language[language]}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetLatestSeries: async (language, page = 1) => {
        const url = `${apiNetflix.access.url}${apiNetflix.entity.series}${apiNetflix.state.latest}${apiNetflix.access.apiKey}${apiNetflix.language[language]}${apiNetflix.access.pagination}${page}`;
            try {
                const res = await axios(url)
                console.log(res)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetById: async (entity, id, language) => {
        const url = `${apiNetflix.url}${apiNetflix.entity[entity]}/${id}${apiNetflix.access.apiKey}${apiNetflix.language[language]}`;
            try {
                const res = await axios(url)
                return res.data.results;
            } catch (error) {
                return []
            }
        },
    tryGetImg: (path) => {
                return `${apiNetflix.access.imageUrl}${apiNetflix.quality.backdropw500}${path}`;
        },
    }


export default apiBuilder;