import { useEffect, useState } from 'react';
import apiBuilder from './getApi';

const useApi = (language, page = 1) => {

const [values, setValues] = useState([])

const getData = async () => {
    const res = await apiBuilder.tryGetPopularMovies(language, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setValues(res)
    };
}

console.log(values)

useEffect(() => {
    getData()
}, [page]);

return [values];

}

export default useApi;