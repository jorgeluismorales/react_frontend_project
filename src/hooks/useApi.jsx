import { useEffect, useState } from 'react';
import apiBuilder from './getApi';

const useApi = (entity, page = 1) => {

const [values, setValues] = useState([])

const getData = async () => {
    const res = await apiBuilder.tryGetPopularMovies(entity, page);
    if (res instanceof Error) {
        console.log(res.messange)
        }else{
    setValues(res)
    };
}

useEffect(() => {
    getData()
}, [page]);

return [values];

}

export default useApi;